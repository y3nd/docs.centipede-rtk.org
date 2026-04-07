# Accéder aux fichiers RINEX
Les fichiers RINEX peuvent être utiles pour le post-traitement, par exemple pour corriger la position d'un rover qui n'était pas connecté à une base au moment de la collecte des données. Un autre usage consiste à analyser la qualité des observations GNSS à des fins de recherche.

## France métropolitaine
Actuellement, les fichiers d'observation RINEX ne sont disponibles que pour les bases déclarées en France métropolitaine, avec l'aide de l'organisation RÉNAG.

- Observations uniquement
- Format RINEX 3, `.crx.gz` ([compression Hatanaka](https://terras.gsi.go.jp/ja/crx2rnx.html))
- Le nom du fichier RINEX suit la [convention de nommage RINEX 3](https://www.spatial.nsw.gov.au/__data/assets/pdf_file/0005/232538/2024_Janssen_APAS2024_understanding_the_RINEX_format.pdf), y compris le nom du marqueur
- Le fichier `info.csv` contient les métadonnées et le nom d'origine du point de montage
- Deux jeux de fichiers RINEX sont disponibles :
  - [**centipede_30s**](https://renag.resif.fr/pub/centipede_30s/) : fichiers RINEX avec un pas d'échantillonnage de 30 secondes
  - [**centipede_1s**](https://renag.resif.fr/pub/centipede_1s/) : fichiers RINEX avec un pas d'échantillonnage de 1 seconde
- [Licence CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- [Référence](https://renag.resif.fr/en/donnees/politique-de-distribution/#The%20CENTIP%C3%88DE%20GNSS%20low-cost%20RTK%20oriented%20network:~:text=The%20CENTIP%C3%88DE%20GNSS%20low%2Dcost%20RTK%20oriented%20network)

## Avec accès à l'interface web RTKBase
Si vous avez accès à l'interface web RTKBase d'une base, vous pouvez générer et télécharger les fichiers RINEX directement depuis l'onglet **File Service**.