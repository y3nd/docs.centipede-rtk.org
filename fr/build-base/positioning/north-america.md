---
prev:
  text: "Positionnement"
  link: "/fr/build-base/positioning"
next:
  text: "Définir les coordonnées de la base"
  link: "/fr/build-base/setting-base-coordinates"
---
<script setup>
import NRCANCoordinatesExtractor from '../../../components/NRCANCoordinatesExtractor.vue'
</script>
# Positionner une station de base RTK en Amérique du Nord
Pays : *États-Unis, Canada, Mexique*

### 1. Convertir un fichier journal en fichier RINEX

* Allez dans l'onglet <span style="color:#007BFF">**LOGS**</span> de votre base RTK et cliquez sur le crayon (`edit`) d'un fichier **24h .zip** complet.

![log2rinex](/assets/images/build-base/positioning/log2rinex1.avif)

* Une fenêtre s'ouvre pour convertir le fichier journal en fichier RINEX.
* **Utilisez un fichier journal de plus de 15 jours**, puis choisissez le préréglage **NRCAN**, compatible avec les services en ligne du NRCAN pour le calcul de positionnement précis. Cliquez sur **Create Rinex File**.

![log2rinex](/assets/images/build-base/positioning/log2rinex1_nrcan.avif)

* Attendez pendant la création du fichier RINEX ; cela peut prendre plusieurs minutes.

![log2rinex](/assets/images/build-base/positioning/log2rinex3.avif)

* Téléchargez le fichier généré. Une fois la fenêtre fermée (`close`), le fichier RINEX apparaît aussi dans la liste des journaux sous un nom du type **YYYY-MM-DD-your_mountpoint_name_nrcan.obs**, pour une taille d'environ **4 MB**.

![log2rinex](/assets/images/build-base/positioning/log2rinex4.avif)

---

### 2. Post-traitement

**Assurez-vous d'utiliser un fichier RINEX de plus de 15 jours pour obtenir un positionnement précis !**  
Cette étape corrige les données brutes de votre base RTK en utilisant la méthode PPP du [NRCAN](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php).

* Rendez-vous sur le site du [NRCAN](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php?locale=fr)
* Démarrez une session en saisissant vos informations
* Choisissez le mode de traitement **Statique** et **NAD83**
* Sélectionnez l'époque **Époque des données GNSS**
* Téléversez le **fichier d'observation RINEX** généré précédemment
* Cliquez sur **Soumettre à PPP**

![log2rinex](/assets/images/build-base/positioning/canada/nrcan_nad83.avif)

Les liens de téléchargement vous sont envoyés par e-mail après quelques minutes :

* Cliquez sur **full_output.zip** pour le télécharger
* Cliquez sur **summary** pour l'afficher

Les **deux documents (summary et full_output.zip)** ainsi que le **fichier RINEX créé précédemment** seront nécessaires lors de la déclaration de votre base ; veillez donc à conserver le tout.

---

### 3. Interprétation du rapport

> Exemple de fichier summary NRCAN :

```
The NAD83(SCRS) 2025-03-22 coordinates calculated for the RINEX file SEPT0810.25O are as follows:
Latitude	N46Â° 17' 54.9219"	Â± 0.002 m (95%)
Longitude	W71Â° 39' 25.7527"	Â± 0.002 m (95%)
Ellipsoidal height	134.493 m	Â± 0.007 m (95%)
Orthometric height	CGVD2013 CGG2013a 162.4271 m
[46.29858940,-71.65715354,134.493]

UTM Zone 19 (North)
Northing	5130655.391 m
Easting	295363.233 m
Scale factor (point)	1.00011479
Scale factor (combined)	1.00009371
[5130655.391,295363.233,134.493]

Cartesian coordinates
X	1389246.816	Â± 0.003 m (95%)
Y	-4190180.681	Â± 0.005 m (95%)
Z	4588337.806	Â± 0.005 m (95%)
[1389246.816,-4190180.681,4588337.806]

Orbits and clocks used: RNCan/IGS final
GNSS data: GPS & GLONASS
GRS80 ellipsoid used for the transformation from (x,y,z) to (lat,lon,h)
```

* Récupérez les coordonnées du rapport, par exemple :

  * **[46.29858940,-71.65715354,134.493]** <---- Vos coordonnées en **NAD83**
* Adaptez-les pour les insérer dans votre base GNSS : retirez les **[]** et remplacez les **,** par des espaces →  
  **46.29858940 -71.65715354 134.493**

<NRCANCoordinatesExtractor lang="fr" />

![itrf2etrf](/assets/images/build-base/positioning/rtkbase-coordinates.avif)

> Vos coordonnées géographiques se trouvent désormais dans le système de référence régional de l'Amérique du Nord.
> Chaque continent et/ou pays utilise souvent aussi un système de coordonnées local, comme **ETRF2000** en Europe, **RGF93** en France ou **NAD83** au Canada, afin de tenir compte des mouvements tectoniques locaux.

Si vous avez besoin de coordonnées correspondant au système de coordonnées local de votre pays, faites-nous part de vos besoins sur le [forum](https://forum.geocommuns.fr/c/rtk-centipede/18).

* Étape suivante : finalisez la [configuration du positionnement de votre base RTK](../setting-base-coordinates.md).
