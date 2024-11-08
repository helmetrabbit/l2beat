import { RateLimiter } from '@l2beat/backend-tools'
import { providers } from 'ethers'

export class RateLimitedProvider {
  private readonly rateLimiter: RateLimiter
  call: providers.Provider['call']
  getBlock: providers.Provider['getBlock']
  getBlockWithTransactions: providers.Provider['getBlockWithTransactions']
  getBlockNumber: providers.Provider['getBlockNumber']
  getLogs: providers.Provider['getLogs']
  getBalance: providers.Provider['getBalance']
  getTransaction: providers.Provider['getTransaction']

  constructor(
    private readonly provider: providers.Provider,
    callsPerMinute: number,
  ) {
    this.rateLimiter = new RateLimiter({ callsPerMinute })
    this.call = this.rateLimiter.wrap(this.provider.call.bind(this.provider))
    this.getBlock = this.rateLimiter.wrap(
      this.provider.getBlock.bind(this.provider),
    )
    this.getBlockWithTransactions = this.rateLimiter.wrap(
      this.provider.getBlockWithTransactions.bind(this.provider),
    )
    this.getBlockNumber = this.rateLimiter.wrap(
      this.provider.getBlockNumber.bind(this.provider),
    )
    this.getLogs = this.rateLimiter.wrap(
      this.provider.getLogs.bind(this.provider),
    )
    this.getBalance = this.rateLimiter.wrap(
      this.provider.getBalance.bind(this.provider),
    )
    this.getTransaction = this.rateLimiter.wrap(
      this.provider.getTransaction.bind(this.provider),
    )
  }
}
