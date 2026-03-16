---
title: Coordinate Reference Systems
---
# Coordinate Reference Systems

## FRANCE

### EPSG Metropolitan France

* **EPSG:9777** / [RGF93 v2 geographic coordinates](https://epsg.io/9777) ellipsoidal in decimal degrees, 2D  
  * to be used for GNSS surveys
* **EPSG:9776** / [RGF93 geographic coordinates](https://epsg.io/9776) ellipsoidal in meters, 3D
* **EPSG:2154** / [RGF93 / Lambert-93 projected coordinates](https://epsg.io/2154) planar in meters  
  * to be used for map design
* **EPSG:10497** / [RGF93 / Lambert-93 projected coordinates + NGF-IGN69 height](https://epsg.io/10497) planar in meters + altitude  
  * to be used for map design and allows altimetric reading of collected data

### Transforming a point from one reference coordinate system to another

Example of converting RGF93 geographic coordinates (EPSG:9777) to RGF93 / Lambert-93 projected coordinates + NGF-IGN69 height (EPSG:10497):

* with [Proj version >7](https://proj.org/usage/quickstart.html):
  * ```echo "45.988773737 -1.024687261 49.81495" | cs2cs EPSG:9777 +to EPSG:10497```
  * ```388588.92 6551165.15 3.04```
* with Postgresql/PostGIS including [Proj version >7](https://proj.org/usage/quickstart.html):
  * st_transform(st_setsrid(st_makepoint(45.988773737,-1.024687261,49.81495), 9777),10497);

[RAF20 for continental France Geotiff Proj](https://cdn.proj.org/fr_ign_RAF20.tif)

[Global grid database provided by PROJ](https://cdn.proj.org/)

[PROJ and datumgrid configuration for altimetry](https://proj.org/usage/network.html?highlight=geotiff)

## Reference Systems

[wikipedia: Spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system)

To locate a position on Earth, it is necessary to use a geodetic system from which the geographic coordinates appearing on maps are derived. These can be expressed either as longitude and latitude (so-called geographic coordinates) or in a planar cartographic representation (so-called projected coordinates).

![geocentrique_geographique](/assets/images/coordinate-systems/globe3.avif)

Geographic coordinates are expressed in sexagesimal degrees (Degrees Minutes Seconds), decimal degrees, grads, or radians and provide the latitude and longitude of a location relative to a meridian.

Be careful: geographic coordinates have no meaning unless they are accompanied by information about the geodetic system in which they are expressed.

The different coordinate systems used in geography are closely linked to the different reference systems:

|Coordinate systems|Reference systems|
|---|---|
|Cartesian (X, Y, Z)|+ Reference system|
|Geographic (Latitude: ɸ, Longitude: ʎ, Ellipsoidal height: h)|+ Reference system + ellipsoid|
|Planar (E, N)|+ Reference system + ellipsoid + projection|

## [French Geodetic Reference Network 1993 (RGF93)](https://geodesie.ign.fr/index.php?page=rgf93)

The French Geodetic Reference Frame 1993 is a geocentric three-dimensional reference frame with centimeter-level precision, adapted to modern positioning techniques for metropolitan France. The following links provide information intended to help users migrate their data to the reference frame defined by decree No. 2019-165 of March 5, 2019 regarding the national coordinate reference system.

It materializes a precise reference frame across metropolitan France, adapted to modern technologies and compatible with global reference systems. It is three-dimensional and geocentric and corresponds to the French realization of ETRS89 (European Terrestrial Reference System 1989). It should be recalled that ETRS89:

- was adopted in 1990 by the EUREF commission of the IAG as the pan-European geodetic reference system for the collection, analysis, and archiving of geographic data.

- coincides with the global ITRS system at epoch 1989.0 and is fixed relative to the stable part of the Eurasian plate.

RGF93 is therefore compatible with the global ITRS system and consequently with the commonly used WGS84 system.

In accordance with decrees 2000-1276 of December 26, 2000, 2006-272 of April 3, 2006, and 2019-165 of March 5, 2019 (and its implementing order), RGF93 constitutes the legal geographic reference.

### Characteristics

RGF93 is a reference frame:

* three-dimensional and geocentric
* linked to the global ITRS reference system
* associated with the IAG GRS 1980 ellipsoid
* using the international meridian (Greenwich meridian) as its origin
* with associated projections Lambert-93 and the CC 9 Zones projections
* with horizontal accuracy between 1 and 2 cm (relative to global systems)
* with vertical accuracy between 2 and 5 cm (relative to global systems)
* adapted to modern positioning techniques

[Legal projection systems](https://geodesie.ign.fr/contenu/fichiers/documentation/pedagogiques/TransformationsCoordonneesGeodesiques.pdf)

### [Ellipsoidal heights to altitudes](https://geodesie.ign.fr/index.php?page=grilles)

The rapid development of GNSS usage has created new needs in reference systems and coordinate conversions, particularly in the field of altimetry. While traditional geodesy separates planimetric and altimetric determinations, GNSS allows these operations to be integrated. It therefore becomes necessary to convert ellipsoidal heights into altitudes.

In addition to the ellipsoid, which is a mathematical model of the Earth, geodesy deals with reference surfaces related to the Earth's gravity field: the geoid, the quasi-geoid, and their various realizations.

The geoid is the surface of the Earth's gravity potential that best coincides with mean sea level.

![geoid](/assets/images/coordinate-systems/image4.avif)

![geoid](/assets/images/coordinate-systems/geoide.avif)

![quasi-geoid](/assets/images/coordinate-systems/quasigeoidecarte3.avif)


The Geodesy and Metrology Service distributes quasi-geoid grids resulting from development and research work, as well as altitude conversion surfaces that can be directly used to estimate altimetry from GNSS data.

For continental France, the RAF20 altimetric conversion surface was updated at the end of 2021 to take into account maintenance operations on the RGF93 reference frame.

[RAF20 for continental France (RGF93 v2b NGF-IGN69)](https://geodesie.ign.fr/contenu/fichiers/documentation/grilles/metropole/RAF20.tac)

[All IGN altitude conversion grids](https://geodesie.ign.fr/index.php?page=grilles)