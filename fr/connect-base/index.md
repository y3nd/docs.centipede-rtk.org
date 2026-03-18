# Connecter une base existante à Centipede-RTK
Centipede-RTK est compatible avec toute base existante capable de diffuser des corrections RTCM3. Si vous disposez déjà d'une base, vous pouvez la connecter au réseau Centipede-RTK et partager ses corrections avec la communauté.

:::warning
Seules les bases déclarées sont présentes dans la [table des mount points NTRIP](https://crtk.net) et accessibles via le mountpoint `NEAR`/`NEAR4`.

La base reste toutefois accessible via son mountpoint saisi manuellement.
:::

## Exigences
Pour être déclarée, une base doit respecter les exigences suivantes.

### Emplacement
Voir [les exigences d'emplacement d'une base](../build-base/antenna-location.md) pour plus de détails.

### Nom du mountpoint
- 4 ou 5 lettres majuscules
- Ne doit pas déjà être utilisé par une autre base du réseau. Pour vérifier la disponibilité, **consultez les deux** :
  - [Liste des bases déclarées](https://gf.centipede-rtk.org/d/ef4e1ohu7fgg0a/mount-point-list?orgId=7)
  - [Vérification de connexion NTRIP](https://y3n.co/ntrip-rtcm-analyzer/) : l'absence de connexion indique que le nom du mountpoint est *probablement* disponible.

### Flux
- La position de l'antenne annoncée dans les messages RTCM3 1005/1006 doit être le **Antenna Phase Center (APC)** moyen, fourni par un rapport de calcul précis. Voir [Calcul du positionnement d'une base](../build-base/positioning/) pour plus de détails.
- Le type d'antenne annoncé doit être ADVNULLANTENNA, avec une hauteur de 0 m.
- Les messages d'observation MSM4/7 doivent être envoyés à 1 Hz, avec toutes les constellations globales activées : GPS, Galileo, GLONASS, BeiDou
- QZSS et IRNSS/NavIC sont requis si la station se trouve dans leur zone de couverture (par exemple le Japon pour QZSS, l'Inde pour IRNSS/NavIC) et si le récepteur les prend en charge.
- Le flux doit être disponible 24h/24, 365 jours par an, avec un minimum d'interruptions
- Les messages d'éphémérides doivent être envoyés toutes les minutes

Flux typique envoyé par une base Centipede-RTK :
```
1004,1005(10),1006,1008(10),1012,1019,1020,1033(10),1042,1045,1046,1077,1087,1097,1127,1230
```

Le contenu du flux peut être analysé avec des outils comme [NTRIP RTCM3 Stream Analyzer](https://y3n.co/ntrip-rtcm-analyzer/).
