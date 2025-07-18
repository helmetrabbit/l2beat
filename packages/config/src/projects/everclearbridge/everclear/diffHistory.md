Generated with discovered.json: 0x171d778fcd01d55c990161711b6d225795844f22

# Diff at Tue, 27 May 2025 08:31:37 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@fd658a9ed4bbd45fc5705d23b1906ca057d0d8b0 block: 1122116
- current block number: 1122116

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 1122116 (main branch discovery), not current.

```diff
    contract EverclearHub (0xa05A3380889115bf313f1Db9d5f335157Be4D816) {
    +++ description: None
      sourceHashes.5:
-        "0x7128ff67025fb2bcb219505d0a80a78e76013becea566de4efba404b7869bc9f"
      sourceHashes.4:
-        "0x62c0ff182f9767f2e54f31e47ffd6587cc114b97ea994c85864c11c8116eb229"
      sourceHashes.3:
-        "0xa9aa0764f18d93b6c8773c69f72f6bdd86c3135b4f310eb2c0e2eb5ae5d0aa30"
      sourceHashes.2:
-        "0xbbe53a68c0042f4050bdf21e8d16eee4688dd35d24e49740915f0a0cf994f0d6"
      sourceHashes.1:
-        "0x8225b12393daa7489701089347eb52c11b768a1c177a6cd227092c9aefd97b85"
+        "0x457307c82577abe25e93c7096a0773b8bc37c55a1373212df91feeee68559f79"
      sourceHashes.0:
-        "0x1e60affed7805f9a7e3ab1afdf31c05e81f9a8977725c508d6222e816b67806f"
+        "0xbbe53a68c0042f4050bdf21e8d16eee4688dd35d24e49740915f0a0cf994f0d6"
    }
```

Generated with discovered.json: 0x8c58c554120451fa4334c7995add21d56e0be024

# Diff at Fri, 23 May 2025 09:41:17 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 1122116
- current block number: 1122116

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 1122116 (main branch discovery), not current.

```diff
    contract  (0xac7599880cB5b5eCaF416BEE57C606f15DA5beB8) {
    +++ description: None
      receivedPermissions.1.role:
+        "admin"
      receivedPermissions.0.role:
+        "admin"
    }
```

Generated with discovered.json: 0xaa2958eb49bead398a9a6932552d340b62bada8e

# Diff at Tue, 06 May 2025 13:32:26 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@09b97f14e3365304f798b0b4fc6971d693d1eb2f block: 1122116
- current block number: 1122116

## Description

everclear

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 1122116 (main branch discovery), not current.

```diff
    contract EverclearHubGateway (0xEFfAB7cCEBF63FbEFB4884964b12259d4374FaAa) {
    +++ description: None
      name:
-        ""
+        "EverclearHubGateway"
    }
```

Generated with discovered.json: 0xec4773fd507f8820236087bc5025494557a42ae4

# Diff at Tue, 29 Apr 2025 08:19:25 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 1122116
- current block number: 1122116

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 1122116 (main branch discovery), not current.

```diff
    contract EverclearHub (0xa05A3380889115bf313f1Db9d5f335157Be4D816) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xac7599880cB5b5eCaF416BEE57C606f15DA5beB8","via":[]}]
    }
```

```diff
    contract  (0xEFfAB7cCEBF63FbEFB4884964b12259d4374FaAa) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xac7599880cB5b5eCaF416BEE57C606f15DA5beB8","via":[]}]
    }
```

Generated with discovered.json: 0x66bd7d7b43beb5d88dcab7767438596fce959eb0

# Diff at Mon, 14 Apr 2025 12:48:39 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@22d5bd9958c2ffcb130d83154e0650da7c63f262 block: 1077934
- current block number: 1107577

## Description

supported domains added.

## Watched changes

```diff
    contract EverclearHub (0xa05A3380889115bf313f1Db9d5f335157Be4D816) {
    +++ description: None
      values.supportedDomains.21:
+        324
      values.supportedDomains.20:
+        146
      values.supportedDomains.19:
+        137
      values.supportedDomains.18:
+        130
      values.supportedDomains.17:
-        324
+        100
      values.supportedDomains.16:
-        137
+        1
      values.supportedDomains.15:
-        130
+        8453
      values.supportedDomains.14:
-        100
+        5000
      values.supportedDomains.13:
-        1
+        2020
      values.supportedDomains.12:
-        8453
+        167000
      values.supportedDomains.11:
-        2020
+        81457
      values.supportedDomains.10:
-        167000
+        80094
      values.supportedDomains.9:
-        81457
+        59144
      values.supportedDomains.8:
-        59144
+        57073
    }
```

Generated with discovered.json: 0xec98cd69992257a9ad296440e0d88daeb132bbe1

# Diff at Thu, 10 Apr 2025 14:44:06 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@f38a3c9bf359344e4c4cd3006f58271cb8f78d15 block: 1077934
- current block number: 1077934

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 1077934 (main branch discovery), not current.

```diff
    contract EverclearHub (0xa05A3380889115bf313f1Db9d5f335157Be4D816) {
    +++ description: None
      name:
-        "ERC1967Proxy"
+        "EverclearHub"
      displayName:
-        "EverclearHub"
    }
```

Generated with discovered.json: 0xf763ad9b042251968d1cbc9c2c5f4a5bbb7eb51b

# Diff at Thu, 03 Apr 2025 09:39:36 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@ad19dfb413ff34348157f743c194a146b6447e05 block: 938182
- current block number: 1041412

## Description

Supported domain added (100 - GnosisChain). ms member changes.

## Watched changes

```diff
    contract ERC1967Proxy (0xa05A3380889115bf313f1Db9d5f335157Be4D816) {
    +++ description: None
      values.supportedDomains.17:
+        324
      values.supportedDomains.16:
-        324
+        137
      values.supportedDomains.15:
-        137
+        130
      values.supportedDomains.14:
-        130
+        100
    }
```

```diff
    contract  (0xac7599880cB5b5eCaF416BEE57C606f15DA5beB8) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"upgrade","from":"0xa05A3380889115bf313f1Db9d5f335157Be4D816"}
      receivedPermissions.0.from:
-        "0xa05A3380889115bf313f1Db9d5f335157Be4D816"
+        "0xEFfAB7cCEBF63FbEFB4884964b12259d4374FaAa"
      values.$members.1:
-        "0x9b903Ae440CB1f01c342466D6DB6b57A5BF98C3f"
+        "0xBc8988C7a4b77c1d6df7546bd876Ea4D42DF0837"
      values.$members.0:
-        "0xeb19B3Bdad53A775EB2d94d57D5a46c5260B0044"
+        "0x9b903Ae440CB1f01c342466D6DB6b57A5BF98C3f"
    }
```

```diff
    contract undefined (0xBc8988C7a4b77c1d6df7546bd876Ea4D42DF0837) {
    +++ description: None
      receivedPermissions:
-        [{"permission":"upgrade","from":"0xEFfAB7cCEBF63FbEFB4884964b12259d4374FaAa"}]
    }
```

```diff
    contract  (0xEFfAB7cCEBF63FbEFB4884964b12259d4374FaAa) {
    +++ description: None
      issuedPermissions.0.to:
-        "0xBc8988C7a4b77c1d6df7546bd876Ea4D42DF0837"
+        "0xac7599880cB5b5eCaF416BEE57C606f15DA5beB8"
      values.$admin:
-        "0xBc8988C7a4b77c1d6df7546bd876Ea4D42DF0837"
+        "0xac7599880cB5b5eCaF416BEE57C606f15DA5beB8"
    }
```

Generated with discovered.json: 0xbc54a4c597cb0568386b7a7a3025b4aac4d1f727

# Diff at Mon, 17 Mar 2025 08:23:04 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- current block number: 938182

## Description

Initial discovery using the custom Everclear proxy handler.

## Initial discovery

```diff
+   Status: CREATED
    contract ERC1967Proxy (0xa05A3380889115bf313f1Db9d5f335157Be4D816)
    +++ description: None
```

```diff
+   Status: CREATED
    contract  (0xac7599880cB5b5eCaF416BEE57C606f15DA5beB8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract  (0xEFfAB7cCEBF63FbEFB4884964b12259d4374FaAa)
    +++ description: None
```
