# Access RINEX files
RINEX files can be useful for post-processing, for example to correct the position of a rover that was not connected to a base station at the time of data collection. Another use case is to analyze the quality of the GNSS observations for research purposes.

## France metropolitan area
Currently, RINEX observations files are only available for declared bases in the France metropolitan area, with help from the RéNAG organization.

- Observations only
- Format RINEX 3, .crx.gz ([Hatanaka compression](https://terras.gsi.go.jp/ja/crx2rnx.html))
- RINEX file name uses [RINEX 3 file naming convention](https://www.spatial.nsw.gov.au/__data/assets/pdf_file/0005/232538/2024_Janssen_APAS2024_understanding_the_RINEX_format.pdf), including marker name
- `info.csv` file contains metadata and original mountpoint name
- Two sets of RINEX files are available:
  - [**centipede_30s**](https://renag.resif.fr/pub/centipede_30s/): RINEX files with a 30-second sampling rate
  - [**centipede_1s**](https://renag.resif.fr/pub/centipede_1s/): RINEX files with a 1-second sampling rate
- [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/)
- [Reference](https://renag.resif.fr/en/donnees/politique-de-distribution/#The%20CENTIP%C3%88DE%20GNSS%20low-cost%20RTK%20oriented%20network:~:text=The%20CENTIP%C3%88DE%20GNSS%20low%2Dcost%20RTK%20oriented%20network)

## With access to a RTKBase web interface
If you have access to the RTKBase web interface of a base station, you can generate and download the RINEX files directly from the **File Service** tab.

## Future developments
The Centipede-RTK team is working on a solution to store and make RINEX files available for all bases in the network, including those outside of France. *Stay tuned for updates on this topic!*