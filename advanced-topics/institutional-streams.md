# Institutional streams
Some institutions maintain permanent GNSS stations and can provide their data streams under certain conditions. These streams can be integrated into the Centipede-RTK network to enhance coverage.

### RÉNAG (REseau NAtional GNSS permanent)
- 35 stations in France
- https://www.epos-france.fr/en/blog/2022/07/12/renag-distributes-its-data-in-real-time/
- https://hal.science/hal-05214397v1/file/Epos-France_Lettre_n%C2%B04_Epos-France_N5_Centipede.pdf
- The RÉNAG also archives and provides France-based Centipede-RTK bases streams to RINEX daily [1s](https://renag.resif.fr/pub/centipede_1s/2026/) and [30s](https://renag.resif.fr/pub/centipede_30s/2026/), which can be used for post-processing and precise base position calculation.
### IGS / EUREF-IP
- Ongoing integration of the IGS / EUREF provided streams

## Stream requirements
- See [Connect an existing base station to Centipede-RTK](../connect-base/) for detailed requirements and process to connect an existing stream/base station to the Centipede-RTK network.

## Process

### If stream provider (receiver) is controlled
- Stream should be configured to match most RTCM3 streams of the Centipede-RTK network, with same messages and intervals. Example can be found here [here](../connect-base/).
- Stream can be sent as is to the Centipede-RTK caster see [Connect an existing base station to Centipede-RTK](../connect-base/) for detailed process.

### If stream is not controlled and not compliant
- A proxy system can be setup to convert the stream to a compliant RTCM3 format and send it to the caster
- Contact the Centipede-RTK team for assistance.

### Determination of the base coordinates (Antenna Phase Center)
- A way to get the precise XYZ APC (*Antenna Phase Center*) coordinates is to edit a RINEX file headers of the station, removing reference to any antenna offset and antenna reference (set to ADVNULLANTENNA), and then submit it to an online positioning service like NRCAN or IGN. This way, the calculated position will be the APC position.
- The stream can be edited to override/inject 1005/1006/1008/1033 messages with the calculated APC position, height at 0 m, and ADVNULLANTENNA type, and then sent to the caster.
- Then the standard process [here](../build-base/declaration.md) can be followed