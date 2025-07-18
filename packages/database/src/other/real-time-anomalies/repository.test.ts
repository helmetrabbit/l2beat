import { ProjectId, UnixTime } from '@l2beat/shared-pure'
import { expect } from 'earl'
import { describeDatabase } from '../../test/database'
import type { RealTimeAnomalyRecord } from './entity'
import { RealTimeAnomaliesRepository } from './repository'

describeDatabase(RealTimeAnomaliesRepository.name, (db) => {
  const repository = db.realTimeAnomalies

  const PROJECT_A = ProjectId('project-a')
  const PROJECT_B = ProjectId('project-b')

  const START = UnixTime.now()
  const DATA: RealTimeAnomalyRecord[] = [
    {
      start: START - 1 * UnixTime.HOUR,
      projectId: PROJECT_A,
      subtype: 'batchSubmissions',
      status: 'ongoing',
    },
    {
      start: START - 2 * UnixTime.HOUR,
      projectId: PROJECT_B,
      subtype: 'batchSubmissions',
      status: 'approved',
    },
    {
      start: START - 3 * UnixTime.HOUR,
      projectId: PROJECT_B,
      subtype: 'proofSubmissions',
      status: 'recovered',
    },
  ]

  beforeEach(async function () {
    this.timeout(10000)
    await repository.deleteAll()
    await repository.upsertMany(DATA)
  })

  describe(RealTimeAnomaliesRepository.prototype.upsertMany.name, () => {
    it('add new and update existing', async () => {
      const newRows: RealTimeAnomalyRecord[] = [
        // to update
        {
          start: START - 1 * UnixTime.HOUR,
          projectId: PROJECT_A,
          subtype: 'batchSubmissions',
          status: 'approved',
          end: START,
        },
        //to add
        {
          start: START - 4 * UnixTime.HOUR,
          projectId: PROJECT_B,
          subtype: 'proofSubmissions',
          status: 'ongoing',
        },
      ]

      await repository.upsertMany(newRows)

      const results = await repository.getAll()
      expect(results).toEqualUnsorted([
        newRows[0]!,
        {
          start: START - 2 * UnixTime.HOUR,
          projectId: PROJECT_B,
          subtype: 'batchSubmissions',
          status: 'approved',
          end: undefined,
        },
        {
          start: START - 3 * UnixTime.HOUR,
          projectId: PROJECT_B,
          subtype: 'proofSubmissions',
          status: 'recovered',
          end: undefined,
        },
        { ...newRows[1]!, end: undefined },
      ])
    })

    it('empty array', async () => {
      await expect(repository.upsertMany([])).not.toBeRejected()
    })
  })

  describe(RealTimeAnomaliesRepository.prototype.getAll.name, () => {
    it('should return all rows', async () => {
      const results = await repository.getAll()

      expect(results).toEqualUnsorted(
        DATA.map((e) => ({
          ...e,
          end: undefined,
        })),
      )
    })
  })

  describe(RealTimeAnomaliesRepository.prototype.getOngoingAnomalies
    .name, () => {
    it('should return all ongoing anomalies', async () => {
      const results = await repository.getOngoingAnomalies()

      expect(results).toEqualUnsorted(
        DATA.filter((e) => e.status !== 'recovered').map((e) => ({
          ...e,
          end: undefined,
        })),
      )
    })
  })

  describe(RealTimeAnomaliesRepository.prototype.deleteAll.name, () => {
    it('should delete all rows', async () => {
      await repository.deleteAll()

      const results = await repository.getAll()

      expect(results).toEqual([])
    })
  })
})
