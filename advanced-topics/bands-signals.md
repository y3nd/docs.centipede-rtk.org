# Bands & signals
High-end modern GNSS receivers can track multiple frequency bands, and each band can carry multiple signals. The more bands and signals a receiver can track, the better its performance will be in terms of accuracy and reliability.

## Bands

Manufacturers often qualify their GNSS receivers as "dual-band", "triple-band", "quad-band" or even "multi-band". However, these terms can be misleading because they do not specify which bands and signals are supported. For example, a "dual-band" receiver may support the L1 and L2 bands, while another "dual-band" receiver may support the L1 and L5 bands. "Triple-band" is *usually* L1, L2 and L5, and "quad-band" is *usually* L1, L2, L5 and E6, also named L6. Moreover, L-band signals for satellite-based corrections services can also be included, the receiver becoming "full-band".

## Signals

For RTK to work between a base and a rover, they must both be able to track the same signals. For example, if the base only tracks A and B signals, but the rover can track A, B and C signals, then the rover will only be able to use the A and B signals for RTK corrections, which may result in lower accuracy and reliability compared to a scenario where both the base and rover can track all three signals.

The best way to determine the exact supported bands and signals is to consult the technical documentation of the receiver, which should provide a detailed list of the frequencies and signal types that the receiver can track. Also check the signal plan if available, because some signals combinations are not supported.

Signal names are standardized by each satellite system, but they can be confusing because they often have multiple and/or overlapping names.

- [GPS signal plan](https://gssc.esa.int/navipedia/index.php?title=GPS_Signal_Plan)
- [GLONASS signal plan](https://gssc.esa.int/navipedia/index.php?title=GLONASS_Signal_Plan)
- [Galileo signal plan](https://gssc.esa.int/navipedia/index.php?title=Galileo_Signal_Plan)
- [Beidou signal plan](https://gssc.esa.int/navipedia/index.php?title=Beidou_Signal_Plan)
- [QZSS signal plan](https://gssc.esa.int/navipedia/index.php?title=QZSS_Signal_Plan)
- [IRNSS signal plan](https://gssc.esa.int/navipedia/index.php?title=IRNSS_Signal_Plan)

Another standard is the RINEX observation code, which is used in RINEX files to identify the signals observed by a receiver. The RINEX observation code consists of a letter indicating the satellite system (G for GPS, R for GLONASS, E for Galileo, C for Beidou, J for QZSS and I for IRNSS) followed by a number indicating the signal type (1 for L1/E1/B1, 2 for L2/E5b/B2, 5 for L5/E5a/B3, 6 for E6/B3I, etc.). For example, G1C means GPS L1C signal, R2P means GLONASS L2P signal, E5Q means Galileo E5aQ signal, C3I means Beidou B2I signal, J1S means QZSS L1S signal and I5X means IRNSS L5X signal.

## Tools
- [RTCM3 NTRIP Live Stream Analyzer](https://y3n.co/ntrip-rtcm-analyzer/)