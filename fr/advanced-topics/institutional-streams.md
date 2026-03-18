# Flux institutionnels
Certaines institutions maintiennent des stations GNSS permanentes et peuvent fournir leurs flux de données sous certaines conditions. Ces flux peuvent être intégrés au réseau Centipede-RTK pour améliorer la couverture.

### RÉNAG (REseau NAtional GNSS permanent)
- 35 stations en France
- https://www.epos-france.fr/en/blog/2022/07/12/renag-distributes-its-data-in-real-time/
- https://hal.science/hal-05214397v1/file/Epos-France_Lettre_n%C2%B04_Epos-France_N5_Centipede.pdf
- RÉNAG archive également et fournit chaque jour les flux des bases Centipede-RTK situées en France au format RINEX [1s](https://renag.resif.fr/pub/centipede_1s/2026/) et [30s](https://renag.resif.fr/pub/centipede_30s/2026/), ce qui peut être utilisé pour le post-traitement et le calcul précis de la position de la base.
### IGS / EUREF-IP
- Intégration en cours des flux fournis par IGS / EUREF

## Exigences de flux
- Voir [Connecter une base existante à Centipede-RTK](../connect-base/) pour les exigences détaillées et la procédure de connexion d'un flux/base existant au réseau Centipede-RTK.

## Processus

### Si le fournisseur de flux (récepteur) est contrôlé
- Le flux doit être configuré pour correspondre aux flux RTCM3 les plus courants du réseau Centipede-RTK, avec les mêmes messages et intervalles. Un exemple est disponible [ici](../connect-base/).
- Le flux peut être envoyé tel quel au caster Centipede-RTK ; voir [Connecter une base existante à Centipede-RTK](../connect-base/) pour la procédure détaillée.

### Si le flux n'est pas contrôlé et n'est pas conforme
- Un système proxy peut être mis en place pour convertir le flux vers un format RTCM3 conforme et l'envoyer au caster.
- Contactez l'équipe Centipede-RTK pour obtenir de l'aide.

### Détermination des coordonnées de base (Antenna Phase Center)
- Une façon d'obtenir les coordonnées XYZ APC (*Antenna Phase Center*) précises consiste à modifier les en-têtes d'un fichier RINEX de la station, en supprimant toute référence au décalage et à la référence de l'antenne (définir ADVNULLANTENNA), puis à le soumettre à un service de positionnement en ligne comme NRCAN ou IGN. De cette façon, la position calculée sera la position APC.
- Le flux peut être modifié pour remplacer ou injecter les messages 1005/1006/1008/1033 avec la position APC calculée, une hauteur à 0 m et le type ADVNULLANTENNA, puis être envoyé au caster.
- Ensuite, la procédure standard [ici](../build-base/declaration.md) peut être suivie.
