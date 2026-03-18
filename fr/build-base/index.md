---
prev: false
next:
  text: "Emplacement de l'antenne"
  link: "/fr/build-base/antenna-location"
---

# Construire une station de base RTK

La géolocalisation standard n'a qu'une précision de quelques mètres, car les perturbations atmosphériques (entre autres) provoquent des erreurs dans les signaux satellites.

Pour obtenir une précision centimétrique, il faut disposer d'un récepteur GNSS statique : une **station de base**.

Elle doit être fixée sur un support stable avec une vue dégagée sur le ciel. Elle connaît sa position avec une grande précision (au millimètre) et **observe 24h/24 et 7j/7 tous les satellites** (GPS, GLONASS, Galileo, Beidou et les systèmes locaux comme QZSS et IRNSS/NavIC).

Une base du **réseau Centipede-RTK** doit fonctionner **24 heures sur 24, 365 jours par an**.

Le résultat est un **flux de données (RTCM3)** d'observations qui sera utilisé par un autre récepteur GNSS (le **rover**) pour corriger sa position.

:::info
Vous avez déjà une base ? Vous pouvez la connecter au réseau Centipede-RTK. Voir [cette page](../connect-base/) pour plus de détails.
:::

La plupart des récepteurs RTK peuvent être utilisés soit comme **rover**, soit comme **base**. Les pages suivantes vous permettront de **construire et déployer votre propre base GNSS RTK**.
