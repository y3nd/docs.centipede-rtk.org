# Utiliser Centipede-RTK sur du matériel agricole John Deere

::: warning
**[Note importante concernant les bases full-frequency avec antenne JD](../known-issues#chcnav--john-deere-sf6000-sf7000-sf7500-serial-throughput-too-low-for-full-frequency-rtk-corrections)**
:::

| Antenne John Deere Star Fire SF3000 | Antenne John Deere Star Fire SF6000 |
|:-:|:-:|
| ![SF3000-ModemRTK](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-ModemRTK.avif)| _TODO: photo à insérer_ |
| _SF3000, support Deluxe, modem RTK Mobile 4G LTE_ | _SF6000, modem RTK Mobile 4G LTE_ |

Ce wiki a principalement été créé à l'aide d'un CommandCenter 4, d'une antenne SF3000 version 2.80S, entre mars 2021 (photos prises) et décembre 2021 (rédaction finale avant publication en V1.0). Voir le tableau des versions et les sources documentaires en bas de page.

### **1) Prérequis**
L'antenne StarFire (3000 ou 6000) doit être équipée d'un **modem Mobile RTK 4G LTE** JD.

Pour monter le modem sur l'antenne, suivez ce document : (lien vers la documentation d'installation du modem : DOC3 en bas de page)

- Insertion de la carte SIM et préparation du modem : pages 7 et 8  
- Montage du modem avec un SF6000 : pages 9 et 10  
- Montage du modem avec un SF3000 (boîtier Deluxe) : pages 11 et 12  

Conditions requises pour John Deere Mobile RTK (extrait p30-1) : (voir DOC2 en bas de page)

- Console GreenStar™ 3 ou de 4e génération avec **activation AutoTrac™**
- L'un des **récepteurs StarFire™** suivants :
  - Récepteur StarFire™ 3000 avec **activation SF2 Ready**, **activation RTK Ready** et **licence d'accès John Deere Mobile RTK**
  - Récepteur StarFire™ 6000 avec **activation SF3 Ready**, **activation RTK Ready** et **licence d'accès John Deere Mobile RTK**
- Modem **Mobile RTK 4G LTE** John Deere
- Fournisseur de réseau cellulaire (fournisseur tiers : Orange, etc.)
- Fournisseur de données de correction RTK (fournisseur tiers : Centipede-RTK par exemple)

Le modem doit d'abord être configuré (via un câble Ethernet) pour fonctionner avec un **SF3000** ou un **SF6000** (voir p60-B1 à 60-B7 de DOC2)  
<_TODO: section à clarifier_>

### **2) Vérifier mes licences**

Accédez à l'écran de configuration de l'antenne (voir page 30-2 de DOC2), puis allez dans l'onglet **Activations**.

![SF3000-Principal-Activations](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-Principal-Activations.avif)  
_Onglet des activations d'un SF3000 sur CommandCenter 4_

Pour que Centipede-RTK fonctionne, vous aurez besoin des mêmes licences que ci-dessus : **SF1, SF2 ou SF3 Ready, RTK**, ainsi que d'une **licence Mobile RTK (1 an ou 5 ans)**.

### **3) Configurer ma carte SIM et le port série M-RTK**

Accédez à la page **StarFire RTK Mobile** depuis la page de l'antenne en appuyant sur le bouton suivant depuis l'écran de l'antenne :

| Antenne John Deere Star Fire SF3000 | Antenne John Deere Star Fire SF6000 |
|:-:|:-:|
|![SF3000-Acces SF RTK Mobile-reduit](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-Acces_SF_RTK_Mobile-reduit.avif)|![SF6000-Acces SF RTK Mobile-reduit](/assets/images/proprietary-hardware/agriculture/john-deere/SF6000-Acces_SF_RTK_Mobile-reduit.avif)|
|_icône d'accès à la page RTK Mobile sur un SF3000_|_icône d'accès à la page RTK Mobile sur un SF6000_|

![SF3000-StarFire RTK mobile](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-StarFire_RTK_mobile.avif)  
_Page StarFire RTK Mobile d'un SF3000 sur un Command Center 4_

Pour configurer le **port série M-RTK**, appuyez sur **Serial Settings and NMEA Message: Config**

![SF3000-SF RTK Mobile - Config NMEA](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_Mobile-Config_NMEA.avif)

_configuration du port série / NMEA du modem JD LTE_

Les paramètres RS232 RTK sont **19200 / 8 / N / 1**  
La fréquence de sortie des messages NMEA est **5** et **GGA checked**  

Limites d'âge de connexion :
- **Max Age:** 15s  
- **Min Init Time:** 5  

Appuyez sur **Cancel** ou **Confirm** selon votre préférence :

| Cancel | Confirm |
|---|---|
|![SF3000-SF RTK Mobile - Annuler](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_MobileAnnuler.avif)|![SF3000-SF RTK Mobile - Validation](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_MobileValidation.avif)|

Pour configurer la **carte SIM**, appuyez sur **Modem and Network: Config**

![SF3000-SF RTK Mobile - Passerelle](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_Mobile-Passerelle.avif)

_configuration de la carte SIM pour une SIM Orange vendue avec une AirBox_

Pour utiliser les fonctions avancées (création de profil, etc.), reportez-vous aux pages **60A-1 et 60A-2 de DOC2**.

Si vous faites des tests avec une antenne déjà configurée pour un autre fournisseur de corrections RTK (pas Centipede) ou un autre fournisseur Internet (changement de SIM), créez un **nouveau profil** et utilisez les fonctions de récupération des paramètres du modem afin de conserver vos réglages d'origine.  
(_TODO: tutoriel à compléter pour cette opération_)

Les **paramètres de passerelle** dépendent du fournisseur et de la carte SIM.

Exemples de paramètres pour les fournisseurs rencontrés :

| Fournisseur | Type d'abonnement | APN | Identifiant | Mot de passe |
|---|---|---|---|---|
| Orange | Forfait Let's Go 10 Go | orange.fr | orange | orange |
| _TODO_ | _Compléter ce tableau_ | xxx | xxxx | xxxxx |

Pour passer à la **configuration des paramètres de correction RTK**, appuyez sur **Next Page**.  
Sinon, appuyez sur **Cancel** ou **Confirm**.

| Cancel | Previous Page | Next Page | Confirm |
|---|---|---|---|
|![SF3000-SF RTK Mobile - Annuler](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_MobileAnnuler.avif)|![SF3000-SF RTK Mobile - Page precedente](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_MobilePagePrecedente.avif)|![SF3000-SF RTK Mobile - Page suivante](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_MobilePageSuivante.avif)|![SF3000-SF RTK Mobile - Validation](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_MobileValidation.avif)|

### **4) Configurer Centipede**

Pour afficher cet écran, suivez l'étape **3) Configurer ma carte SIM**, puis appuyez sur **Next Page**.

![SF3000-SF RTK Mobile - PAra Donnee correction](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-SF_RTK_Mobile-PAraDonneeCorrection.avif)

_configuration sur la base SIM80 du caster Centipede-RTK_

Saisissez les informations suivantes :

IP/URL : **crtk.net**  
Port : **2101**

Mount point : choisissez la **base la plus proche / la plus adaptée à votre position géographique en MAJUSCULES**

Utilisez cette carte pour trouver la base la plus proche :  
https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede

Pour saisir **User ID and password**, appuyez sur **Edit Connection Info**

User ID : **centipede**  
Password : **centipede**

N'oubliez pas d'appuyer sur **Confirm** jusqu'à revenir à l'écran **StarFire RTK Mobile**.

Pour plus de détails, reportez-vous à la **page 60A-3 de DOC2**.

### **5) Est-ce que cela fonctionne ?**

L'image ci-dessous montre l'antenne en fonctionnement.

- **Position Mode** doit être **M-RTK 3D**
- **Modem status** doit être **Connected**
- **Correction age** doit être de **2 secondes ou moins**
- Le **compteur de données reçues** doit augmenter de plusieurs Ko par seconde  
  (j'ai observé une consommation d'un peu plus de **2 Mo par heure**)

![SF3000-StarFire RTK mobile](/assets/images/proprietary-hardware/agriculture/john-deere/SF3000-StarFire_RTKmobile.avif)

---

## Documents de référence

- **DOC1 :** PFP12907_John_Deere_Mobile_RTK_FR.pdf - Guide de référence John Deere RTK Mobile  
  [PFP12907_John_Deere_Mobile_RTK_FR.pdf](https://github.com/jancelin/centipede/files/7530133/PFP12907_John_Deere_Mobile_RTK_FR.pdf)

- **DOC2 :** OMPFP21126.pdf - Manuel de maintenance du modem John Deere Mobile RTK 4G LTE, édition F1 (français)  
  [OMPFP21126.pdf](https://github.com/jancelin/centipede/files/7530139/OMPFP21126.pdf)

- **DOC3 :** PFP22140_28.pdf - Instructions d'installation du modem John Deere Mobile RTK 4G LTE, 21JUN21 (français)  
  [PFP22140_28.pdf](https://github.com/jancelin/centipede/files/7530147/PFP22140_28.pdf)

---

| Version | Date | Auteur | Modifications apportées |
|---|---|---|---|
| V0.1 | 02/12/2021 | AgroGeek (SB) | corrections de fautes et ajout du tableau de versions/modifications à la version initiale |
| V0.2 | 03/12/2021 | AgroGeek (SB) | ajout de la section 3) Configurer le port série de l'antenne |
| V0.3 | 03/12/2021 | AgroGeek (SB) | ajout de la configuration du port série M-RTK dans la section 4) et de la version de l'antenne dans l'en-tête |
| V0.4 | 03/12/2021 | AgroGeek (SB) | suppression de la section 3) Configurer le port série de l'antenne |

| Version | Date | Auteur | Modifications en attente |
|---|---|---|---|
| V0.1 | 02/12/2021 | AgroGeek (SB) | Photo d'un SF6000 dans l'introduction |
| V0.1 | 02/12/2021 | AgroGeek (SB) | Configuration du modem pour SF3000 ou SF6000 |
| V0.1 | 02/12/2021 | AgroGeek (SB) | Remplacer le texte DOC2 et DOC3 par des liens |
| V0.1 | 02/12/2021 | AgroGeek (SB) | Configuration de la carte SIM : tutoriel pour créer de nouveaux jeux de configuration |
| V0.1 | 02/12/2021 | AgroGeek (SB) | Compléter le tableau des fournisseurs |

---
