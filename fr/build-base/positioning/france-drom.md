---
prev:
  text: "Positionnement"
  link: "/fr/build-base/positioning"
next:
  text: "Définir les coordonnées de la base"
  link: "/fr/build-base/setting-base-coordinates"
---
# Positionner une station de base RTK en France et DROM

### 1. Convertir un fichier journal en fichier RINEX

* Allez dans l'onglet <span style="color:#007BFF">**LOGS**</span> de votre base RTK et cliquez sur le crayon (```edit```) d'un fichier **.zip** complet de 24 heures.

![log2rinex](/assets/images/build-base/positioning/log2rinex1.avif)

* Une fenêtre s'ouvre pour convertir le fichier journal en fichier RINEX.
* Si vous êtes en France : choisissez le préréglage **IGN**, compatible avec les services en ligne de l'IGN pour le calcul de positionnement précis. Cliquez sur **Create Rinex File**.

![log2rinex](/assets/images/build-base/positioning/france-drom/log2rinex2.avif)

* Attendez pendant la création du fichier RINEX ; cela peut prendre plusieurs minutes.

![log2rinex](/assets/images/build-base/positioning/log2rinex3.avif)

* Téléchargez le fichier généré. Une fois la fenêtre fermée (```close```), le fichier RINEX apparaît aussi dans la liste des journaux sous un nom du type **YYYY-MM-DD-your_mountpoint_name_ign.25o**, pour une taille d'environ 4 Mo.

![log2rinex](/assets/images/build-base/positioning/log2rinex4.avif)

---

### 2. Post-traitement

Cette étape corrige les données brutes de votre base RTK à l'aide des stations de référence du [Réseau Géodésique Permanent](http://rgp.ign.fr/) afin d'obtenir une position corrigée précise.

* Rendez-vous sur le site de l'IGN : [Calculs en ligne du réseau GNSS](http://rgp.ign.fr/SERVICES/calcul_online.php)
* Dans la section **"Observation files in RINEX format"**, téléversez votre fichier **YYYY-MM-DD-MP.20o** dans **Pivot**
* Dans la section **"Permanent GNSS Stations to integrate"**, réglez :
  * nombre maximum : **8**
  * distance maximale : **1000 km**
* Saisissez votre adresse e-mail pour recevoir le rapport
* Rafraîchissez le code avec les flèches bleues et saisissez les 4 lettres
* Cliquez sur **Submit request**

Le rapport de positionnement vous sera envoyé par e-mail après quelques minutes.

![ign](/assets/images/build-base/positioning/france-drom/ign_reseau_en_ligne1.avif)

---

### 3. Interpréter le rapport

* Le rapport (**xxxxxx.tar.gz**) doit être extrait. Il sera aussi requis lors de la déclaration de votre base sur le réseau Centipede-RTK.
* Le rapport contient 3 documents :
  * un fichier d'aide (**readme.txt**) expliquant la structure du rapport
  * une **carte PDF** montrant la répartition des stations de référence et les résidus de l'ajustement
  * le **rapport de calcul** au format texte
* Le rapport est composé de plusieurs sections ; la position de votre base se trouve à la fin du document dans la section **====== RGF93 ======**
* Il est important de vérifier la section **ESTIMATED ACCURACY (2*SIGMA)** car elle indique la qualité du calcul.  
  **Vos valeurs doivent être inférieures à 10 mm pour E_N et E_E, et inférieures à 20 mm pour E_H.**
* Notez les coordonnées de votre base dans cet ordre : **Latitude Longitude Hell**, afin de pouvoir les copier dans votre base RTK.

![ign](/assets/images/build-base/positioning/france-drom/ign_reseau_en_ligne1.avif)

* Passez maintenant à l'étape finale : [configurer le positionnement de votre base RTK](../setting-base-coordinates.md)
