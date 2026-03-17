# Connect an existing base station to Centipede-RTK
Centipede-RTK is compatible with any existing base station that can transmit RTCM3 corrections. If you have an existing base station, you can connect it to the Centipede-RTK network and share its corrections with the community.

:::warning
Only declared bases are present in the [NTRIP mount table](https://crtk.net) and reachable through the `NEAR`/`NEAR4` mountpoint.

The base will still be reachable through its manually typed mount point.
:::

## Requirements
To be declared, a base must meet the following requirements.

### Location
See [Base station location requirements](../build-base/antenna-location.md) for more details.

### Mountpoint name
- 4 or 5 uppercase letters
- Not already used by another base in the network. For availability, **check both**:
  - [Declared bases list](https://gf.centipede-rtk.org/d/ef4e1ohu7fgg0a/mount-point-list?orgId=7)
  - [NTRIP connection check](https://y3n.co/ntrip-rtcm-analyzer/): no connection indicates the mountpoint name is *likely* available.

### Stream
- The announced RTCM3 1005/1006 antenna position should be (mean) **Antenna Phase Center (APC)**, provided by a precise calculation report. See [Base station position calculation](../build-base/positioning/) for more details.
- The announced antenna type should be ADVNULLANTENNA, with a height of 0 m.
- MSM4/7 observations messages should be sent at 1 Hz, with all global constellations enabled: GPS, Galileo, GLONASS, BeiDou
- QZSS and IRNSS/NavIC are required if the station is located in their coverage area (e.g., Japan for QZSS, India for IRNSS/NavIC) and the receiver supports them.
- The stream should be available 24/7 all year, with minimal interruptions
- Ephemeris messages should be sent every minute

Typical stream sent by a Centipede-RTK base station:
```
1004,1005(10),1006,1008(10),1012,1019,1020,1033(10),1042,1045,1046,1077,1087,1097,1127,1230
```

Stream content can be analyzed with tools like [NTRIP RTCM3 Stream Analyzer](https://y3n.co/ntrip-rtcm-analyzer/).