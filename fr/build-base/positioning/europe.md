---
prev:
  text: "Positionnement"
  link: "/fr/build-base/positioning"
next:
  text: "Définir les coordonnées de la base"
  link: "/fr/build-base/setting-base-coordinates"
---
# Positionner une station de base RTK en Europe

### 1. Convertir un fichier journal en fichier RINEX

* Allez dans l'onglet <span style="color:#007BFF">**LOGS**</span> de votre base RTK et cliquez sur le crayon (```edit```) d'un fichier **24 heures .zip** complet.

![log2rinex](/assets/images/build-base/positioning/log2rinex1.avif)

* Une fenêtre s'ouvre pour convertir le fichier journal en fichier RINEX.
* Si vous êtes hors de France : **utilisez un fichier journal de plus de 15 jours**, puis choisissez le préréglage **NRCAN**, compatible avec les services en ligne du NRCAN pour le calcul de positionnement précis. Cliquez sur **Create Rinex File**.

![log2rinex](/assets/images/build-base/positioning/log2rinex1_nrcan.avif)

* Attendez pendant la création du fichier RINEX ; cela peut prendre plusieurs minutes.

![log2rinex](/assets/images/build-base/positioning/log2rinex3.avif)

* Téléchargez le fichier généré. Une fois la fenêtre fermée (```close```), le fichier RINEX est aussi disponible dans la liste des journaux sous un nom du type **YYYY-MM-DD-your_mountpoint_name_nrcan.obs** et pour une taille d'environ **4 MB**.

![log2rinex](/assets/images/build-base/positioning/log2rinex4.avif)

### 2. Post-traitement

**Assurez-vous d'utiliser un fichier RINEX de plus de 15 jours pour obtenir un positionnement précis !**  
Cette étape corrige les données brutes de votre base RTK en utilisant la méthode PPP fournie par [NRCAN](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php).

* Rendez-vous sur le [site du NRCAN](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php)
* Démarrez une session en saisissant vos informations
* Choisissez le mode de traitement **static** et **ITRF**
* Téléversez le fichier d'observation RINEX généré précédemment
* Cliquez sur **Submit to PPP**

![log2rinex](/assets/images/build-base/positioning/nrcan.avif)

Les liens de téléchargement vous sont envoyés par e-mail après quelques minutes :

* Cliquez sur **full_output.zip** pour le télécharger
* Cliquez sur **summary** pour l'afficher

Les deux documents (**summary** et **full_output.zip**) + le fichier **RINEX** généré précédemment seront requis lors de la déclaration de votre station ; veillez donc à conserver toutes ces informations.

### 3. Interprétation du rapport

> Exemple de fichier summary NRCAN :

```

The estimated coordinates ITRF20 2023-05-24 for the 2023-05-25-CT_nrcan_1_.obs RINEX file are as follows:
Latitude	N46Â° 09' 53.4007"	Â± 0.002 m (95%)
Longitude	W0Â° 56' 54.7154"	Â± 0.002 m (95%)
Ellipsoidal Height	65.270 m	Â± 0.008 m (95%)
[46.16483353,-0.94853206,65.270] <---- Your coordinates in ITRF20!!

UTM Zone 30 (North)
Northing	5114407.540 m
Easting	658376.222 m
Scale factor (point)	0.99990835
Scale factor (combined)	0.99989812
[5114407.540,658376.222,65.270]

Cartesian coordinates
X	4424561.087	Â± 0.006 m (95%)
Y	-73255.334	Â± 0.002 m (95%)
Z	4578002.990	Â± 0.006 m (95%)
[4424561.087,-73255.334,4578002.990]

Orbits and Clocks Used: NRCan/IGS Final
GNSS Data: GPS & GLONASS
GRS80 ellipsoid used for (x,y,z) to (lat,lon,h) transformation

```

* Récupérez les coordonnées du rapport, par exemple :
	* **[46.16483353,-0.94853206,65.270]** <---- Vos coordonnées en ITRF20
* Adaptez-les pour les insérer dans votre base GNSS : retirez les **[]** et remplacez les **,** par un espace :  
**46.16483353 -0.94853206 65.270**

![itrf2etrf](/assets/images/build-base/positioning/rtkbase-coordinates.avif)

> Vos coordonnées géographiques sont maintenant exprimées dans un système global international pour l'Europe géographique qui prend en compte le mouvement de la plaque tectonique eurasiatique.  
Chaque pays dispose souvent aussi de son propre système de coordonnées local, comme **RGF93** en France, afin de tenir compte des mouvements locaux. Les différences sont minimes pour le positionnement RTK (**< 1 cm**).
Si vous avez besoin que vos coordonnées correspondent au système de coordonnées utilisé dans votre pays, faites-nous connaître vos besoins sur le [forum](https://forum.geocommuns.fr/c/rtk-centipede/18).

* Passez maintenant à l'étape finale : [configurer le positionnement de votre base RTK](../setting-base-coordinates.md)
