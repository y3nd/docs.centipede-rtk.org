---
title: Accéder aux corrections
---

# Accéder aux corrections

Les corrections sont accessibles via le protocole NTRIP, largement pris en charge par les logiciels et matériels RTK. Pour vous connecter au réseau Centipede-RTK, vous aurez besoin d'un client NTRIP et des informations de connexion suivantes :
- **Hostname**: `crtk.net`
- **Port**: `2101`
- **Mountpoint**: `NEAR` (ou `NEAR4` pour une consommation de données plus faible)
  - Le mountpoint peut aussi être sélectionné manuellement par son nom, que vous trouverez sur la [carte de couverture](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede)
- Aucune identification n'est nécessaire, mais cela fonctionne aussi avec :
  - **Username**: `centipede`
  - **Password**: `centipede`
- **Format**: RTCM3
- **Version NTRIP**: les versions 1 et 2 sont prises en charge
