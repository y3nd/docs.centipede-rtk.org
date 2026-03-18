---
title: Systèmes de référence de coordonnées
---
# Systèmes de référence de coordonnées

## FRANCE

### EPSG France métropolitaine

* **EPSG:9777** / [coordonnées géographiques RGF93 v2](https://epsg.io/9777) ellipsoïdales en degrés décimaux, 2D  
  * à utiliser pour les relevés GNSS
* **EPSG:9776** / [coordonnées géographiques RGF93](https://epsg.io/9776) ellipsoïdales en mètres, 3D
* **EPSG:2154** / [coordonnées projetées RGF93 / Lambert-93](https://epsg.io/2154) planes en mètres  
  * à utiliser pour la conception cartographique
* **EPSG:10497** / [coordonnées projetées RGF93 / Lambert-93 + altitude NGF-IGN69](https://epsg.io/10497) planes en mètres + altitude  
  * à utiliser pour la conception cartographique et permettant la lecture altimétrique des données collectées

### Transformer un point d'un système de coordonnées de référence à un autre

Exemple de conversion de coordonnées géographiques RGF93 (EPSG:9777) vers des coordonnées projetées RGF93 / Lambert-93 + altitude NGF-IGN69 (EPSG:10497) :

* avec [Proj version > 7](https://proj.org/usage/quickstart.html) :
  * ```echo "45.988773737 -1.024687261 49.81495" | cs2cs EPSG:9777 +to EPSG:10497```
  * ```388588.92 6551165.15 3.04```
* avec PostgreSQL/PostGIS incluant [Proj version > 7](https://proj.org/usage/quickstart.html) :
  * `st_transform(st_setsrid(st_makepoint(45.988773737,-1.024687261,49.81495), 9777),10497);`

[RAF20 pour la France continentale, fichier Geotiff Proj](https://cdn.proj.org/fr_ign_RAF20.tif)

[Base mondiale de grilles fournie par PROJ](https://cdn.proj.org/)

[Configuration de PROJ et datumgrid pour l'altimétrie](https://proj.org/usage/network.html?highlight=geotiff)

## Systèmes de référence

[Wikipedia : système de référence spatial](https://en.wikipedia.org/wiki/Spatial_reference_system)

Pour localiser une position sur Terre, il faut utiliser un système géodésique à partir duquel sont dérivées les coordonnées géographiques figurant sur les cartes. Elles peuvent s'exprimer soit en longitude et latitude (dites coordonnées géographiques), soit sous une représentation cartographique plane (dites coordonnées projetées).

![geocentrique_geographique](/assets/images/coordinate-systems/globe3.avif)

Les coordonnées géographiques s'expriment en degrés sexagésimaux (degrés, minutes, secondes), en degrés décimaux, en grades ou en radians et donnent la latitude et la longitude d'un lieu par rapport à un méridien.

Attention : des coordonnées géographiques n'ont pas de sens si elles ne sont pas accompagnées d'informations sur le système géodésique dans lequel elles sont exprimées.

Les différents systèmes de coordonnées utilisés en géographie sont étroitement liés aux différents systèmes de référence :

|Systèmes de coordonnées|Systèmes de référence|
|---|---|
|Cartésien (X, Y, Z)|+ système de référence|
|Géographique (Latitude : É¸, Longitude : ÊŽ, Hauteur ellipsoïdale : h)|+ système de référence + ellipsoïde|
|Plan (E, N)|+ système de référence + ellipsoïde + projection|

## [Réseau Géodésique Français 1993 (RGF93)](https://geodesie.ign.fr/index.php?page=rgf93)

Le Réseau Géodésique Français 1993 est un système de référence géocentrique tridimensionnel, précis au centimètre, adapté aux techniques modernes de positionnement en France métropolitaine. Les liens suivants fournissent des informations destinées à aider les utilisateurs à migrer leurs données vers le système de référence défini par le décret n° 2019-165 du 5 mars 2019 concernant le système national de référence de coordonnées.

Il matérialise un référentiel précis sur l'ensemble de la France métropolitaine, adapté aux technologies modernes et compatible avec les systèmes de référence globaux. Il est tridimensionnel et géocentrique et correspond à la réalisation française d'ETRS89 (European Terrestrial Reference System 1989). Il convient de rappeler qu'ETRS89 :

- a été adopté en 1990 par la commission EUREF de l'IAG comme système géodésique de référence paneuropéen pour la collecte, l'analyse et l'archivage des données géographiques.

- coïncide avec le système global ITRS à l'époque 1989.0 et est fixé par rapport à la partie stable de la plaque eurasienne.

RGF93 est donc compatible avec le système global ITRS et, par conséquent, avec le système WGS84 couramment utilisé.

Conformément aux décrets 2000-1276 du 26 décembre 2000, 2006-272 du 3 avril 2006 et 2019-165 du 5 mars 2019 (et à son arrêté d'application), RGF93 constitue la référence géographique légale.

### Caractéristiques

RGF93 est un référentiel :

* tridimensionnel et géocentrique
* lié au système de référence global ITRS
* associé à l'ellipsoïde IAG GRS 1980
* utilisant le méridien international (méridien de Greenwich) comme origine
* avec les projections associées Lambert-93 et CC 9 Zones
* avec une précision horizontale comprise entre 1 et 2 cm (par rapport aux systèmes globaux)
* avec une précision verticale comprise entre 2 et 5 cm (par rapport aux systèmes globaux)
* adapté aux techniques modernes de positionnement

[Systèmes de projection légaux](https://geodesie.ign.fr/contenu/fichiers/documentation/pedagogiques/TransformationsCoordonneesGeodesiques.pdf)

### [Des hauteurs ellipsoïdales aux altitudes](https://geodesie.ign.fr/index.php?page=grilles)

Le développement rapide de l'usage du GNSS a créé de nouveaux besoins en matière de systèmes de référence et de conversion de coordonnées, en particulier dans le domaine de l'altimétrie. Alors que la géodésie traditionnelle sépare les déterminations planimétriques et altimétriques, le GNSS permet d'intégrer ces opérations. Il devient donc nécessaire de convertir les hauteurs ellipsoïdales en altitudes.

En plus de l'ellipsoïde, qui est un modèle mathématique de la Terre, la géodésie s'intéresse à des surfaces de référence liées au champ de gravité terrestre : le géoïde, le quasi-géoïde et leurs différentes réalisations.

Le géoïde est la surface d'équipotentiel de la pesanteur terrestre qui coïncide au mieux avec le niveau moyen de la mer.

![geoid](/assets/images/coordinate-systems/image4.avif)

![geoid](/assets/images/coordinate-systems/geoide.avif)

![quasi-geoid](/assets/images/coordinate-systems/quasigeoidecarte3.avif)

Le Service de Géodésie et de Métrologie diffuse des grilles de quasi-géoïde issues de travaux de développement et de recherche, ainsi que des surfaces de conversion d'altitude directement utilisables pour estimer l'altimétrie à partir des données GNSS.

Pour la France continentale, la grille de conversion altimétrique RAF20 a été mise à jour fin 2021 afin de prendre en compte les opérations de maintenance sur le référentiel RGF93.

[RAF20 pour la France continentale (RGF93 v2b NGF-IGN69)](https://geodesie.ign.fr/contenu/fichiers/documentation/grilles/metropole/RAF20.tac)

[Toutes les grilles de conversion d'altitude IGN](https://geodesie.ign.fr/index.php?page=grilles)
