# Rover RTK avec applications smartphone

À noter qu'à l'heure actuelle toutes les solutions nécessitent un récepteur RTK et une antenne externes. Le récepteur GNSS interne du smartphone n'est pas encore capable de fournir une précision de niveau RTK. Toutefois, les applications mentionnées ci-dessous permettent de connecter un récepteur RTK externe (comme un U-blox F9P) à votre smartphone via Bluetooth ou USB, ce qui vous permet de recevoir les corrections RTK et d'atteindre une précision centimétrique sur votre appareil mobile.

![rover architecture](/assets/images/smartphone-apps/mm_rover_small.avif)

## Application Lefebure (propriétaire)

![Lefebure](/assets/images/smartphone-apps/lefebure.avif)

L'application Lefebure NTRIP Client pour Android vous permet d'envoyer les corrections d'un mountpoint du réseau Centipede-RTK vers le récepteur GNSS (ublox-F9P) et de recevoir un flux NMEA corrigé.  

L'option **Enable Mock Location** permet d'utiliser votre récepteur GNSS RTK pour la géolocalisation dans toutes les applications de votre smartphone/tablette Android, comme les outils SIG tels que [Mergin Maps](https://play.google.com/store/apps/details?id=uk.co.lutraconsulting&hl=fr&gl=fr), [Qfield](https://play.google.com/store/apps/details?id=ch.opengis.qfield&hl=fr&gl=fr) et [OsmAnd](https://play.google.com/store/apps/details?id=net.osmand&hl=fr&gl=US).

Il est possible d'enregistrer plusieurs profils d'utilisation en fonction de vos déplacements entre les mount points du réseau Centipede-RTK.

[Lefebure NtripClient sur le Play Store](https://play.google.com/store/apps/details?id=com.lefebure.ntripclient&hl=fr&gl=fr)

[Documentation Lefebure NtripClient](http://lefebure.com/software/android-ntripclient/)

<div class="container">
  <div class="video">
    <video style="display:block; width:50%; height:auto;" controls="true">
      <source src="/assets/videos/lefebure.webm" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

[Tutoriel : utiliser un rover avec Centipede-RTK et Lefebure (français)](https://www.agrotic.org/wp-content/uploads/2019/10/Utiliser-un-Rover-RTK-Centipede-sur-Android-avec-Input-et-Lefebure.docx-1.pdf)

---

## Bluetooth GNSS (open source)

![Bluetooth gnss](/assets/images/smartphone-apps/bluetooth-gnss.avif)

Une alternative open source à l'application Lefebure. Cette application prend en charge la fusion des flux de données provenant d'un serveur NTRIP pour du positionnement RTK professionnel.

L'application affiche les estimations de précision issues des messages de précision U-Blox `PUBX` au lieu de la méthode couramment utilisée `HDOP × CEP`.  

Cette lecture de précision PUBX correspond exactement à la même source de précision affichée dans l'outil **U-Center PC** lorsqu'il est connecté directement à des appareils M8030 (EcoDroidGPS) ou ZED-F9P (EcoDroidGPS + ArduSimple) via USB.

[GitHub libbluetooth_gnss](https://github.com/ykasidit/libbluetooth_gnss)

[Bluetooth GNSS sur le Play Store](https://play.google.com/store/apps/details?id=com.clearevo.bluetooth_gnss)

<div class="container">
  <div class="video">
    <video style="display:block; width:50%; height:auto;" controls="true">
      <source src="/assets/videos/BT_Gnss.webm" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

---

## Application SW MAPS (propriétaire)

![swmaps](/assets/images/smartphone-apps/sw-maps.avif)

SW Maps est une application SIG et de cartographie mobile gratuite permettant de collecter, présenter et partager des informations géographiques.

Que vous réalisiez un relevé GNSS à grande échelle avec des instruments de haute précision, que vous collectiez de grandes quantités de données de localisation uniquement à l'aide de votre téléphone, ou que vous affichiez simplement des shapefiles avec des étiquettes sur une carte de fond sur le terrain, SW Maps prend en charge tous ces cas d'usage.

Vous pouvez enregistrer des **points, lignes, polygones et même des photos**, les afficher sur la carte de fond de votre choix, et associer des attributs personnalisés à n'importe quelle entité. Les types d'attributs pris en charge incluent le texte, les nombres, les listes de choix prédéfinies, les photos, les extraits audio et les vidéos.

Réalisez des **relevés GPS de haute précision** à l'aide de récepteurs externes compatibles RTK via Bluetooth ou USB Serial.

Dessinez des éléments sur la carte en ajoutant des marqueurs et mesurez des distances et des surfaces.

Réutilisez les couches et attributs d'un projet précédent pour un autre relevé, ou créez des modèles et partagez-les avec d'autres utilisateurs.

Partagez les données collectées sous forme de **Geopackages, KMZ ou shapefiles**, ou exportez-les vers le stockage de votre appareil. Les données peuvent aussi être exportées en **feuilles de calcul (XLS / ODS)** ou en **fichiers CSV**.

[SWMAPS sur le Play Store](https://play.google.com/store/apps/details?id=np.com.softwel.swmaps&hl=fr&gl=fr)
[SW Maps sur l'App Store](https://apps.apple.com/fr/app/sw-maps/id6444248083)

[Tutoriel : utiliser SW Maps avec un RTK Surveyor et Centipede-RTK](https://www-iuem.univ-brest.fr/pops/attachments/2589)

---

## QField 7025 beta (open source)

![qfield](/assets/images/smartphone-apps/qfield_logo.svg)

QField est une application SIG et de cartographie mobile libre et open source pour collecter, présenter et partager des informations géographiques. \

La prise en charge native de Ntrip par QField est [actuellement en développement (PR 7025)](https://github.com/opengisch/QField/pull/7025), mais [certaines versions de test](https://files.y3n.co/crtk/qfield/QField%20Beta%20PR%207025%20arm.apk) sont disponibles.

[QField sur le Play Store](https://play.google.com/store/apps/details?id=ch.opengis.qfield&hl=fr&gl=fr)
[QField sur l'App Store](https://apps.apple.com/fr/app/qfield-for-qgis/id1531726814)
[QField GitHub](https://github.com/qgis/QField)

---
