---
title: Access corrections
---

# Access corrections

Corrections are accessible through the NTRIP protocol, which is widely supported by RTK software and hardware. To connect to the Centipede-RTK network, you will need an NTRIP client and the following connection details:
- **Hostname**: `crtk.net`
- **Port**: `2101`
- **Mountpoint**: `NEAR` (or `NEAR4` for lower data consumption)
  - Mountpoint can also be selected manually using its name, which can be found on the [coverage map](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede)
- No credentials, but can also work with:
  - **Username**: `centipede`
  - **Password**: `centipede`
- **Format**: RTCM3
- **NTRIP version**: 1 and 2 are supported

:::warning
`NEAR` or `NEAR4` mountpoints need to receive NMEA GGA sentences to start sending corrections from the nearest base station.
:::