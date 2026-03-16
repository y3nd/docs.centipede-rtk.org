# Existing base station integration
Centipede-RTK is compatible with any existing base station that can transmit RTCM3 corrections. If you have an existing base station, you can connect it to the Centipede-RTK network and share its corrections with the community. This allows you to contribute to the network and benefit from the corrections of other bases in your area.

## Institutional streams
### RÉNAG (REseau NAtional GNSS permanent)
- 35 stations in France
- https://www.epos-france.fr/en/blog/2022/07/12/renag-distributes-its-data-in-real-time/
- https://hal.science/hal-05214397v1/file/Epos-France_Lettre_n%C2%B04_Epos-France_N5_Centipede.pdf
- The RÉNAG also archives and provides France-based Centipede-RTK bases streams to RINEX daily [1s](https://renag.resif.fr/pub/centipede_1s/2026/) and [30s](https://renag.resif.fr/pub/centipede_30s/2026/), which can be used for post-processing and precise base position calculation.
### IGS / EUREF-IP
- Ongoing integration of the IGS / EUREF provided streams

## Stream requirements
- The announced RTCM3 1005/1006 antenna position should be (mean) **Antenna Phase Center (APC)**.
- The announced antenna type should be ADVNULLANTENNA, with a height of 0 m.
- MSM4/7 messages should be sent at 1 Hz, with at least GPS and Galileo constellations and ideally GLONASS and BeiDou as well.
- QZSS and IRNSS/NavIC are required if the station is located in their coverage area and the receiver supports them.
- The stream should be available 24/7 all year, with minimal interruptions
- If available, ephemeris messages should be sent every minute

Also, some streams have missing messages like ephemeris or legacy messages, which can be necessary for older hardware. Modern receivers can work with only minimal RTCM3 messages (1005/1006 for base station position and MSM4/7 for satellite observations).

## Process

### If stream is controlled
- Stream should be configured to match most RTCM3 streams of the Centipede-RTK network, with same messages and intervals
- Stream can be sent as is to the Centipede-RTK caster (crtk.net:2101)
### If stream is not controlled and not compliant
- A proxy system can be setup to convert the stream to a compliant RTCM3 format and send it to the caster

### Determination of the base position (Antenna Phase Center)
- A nice way to get the precise XYZ APC coordinates is to edit a RINEX file headers of the station, removing reference to any antenna offset and antenna reference (set to ADVNULLANTENNA), and then submit it to an online positioning service like NRCAN or IGN. This way, the calculated position will be the APC position.
- The stream can be edited to override/inject 1005/1006/1008/1033 messages with the calculated APC position, height at 0 m, and ADVNULLANTENNA type, and then sent to the caster.
- Then the standard process [here](../build-base/declaration.md) can be followed