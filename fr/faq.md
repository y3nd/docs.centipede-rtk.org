---
title: Questions fréquentes
---
# Questions fréquentes

* ### À quoi ça sert ?

> Déterminer votre position géographique avec une précision centimétrique.

* ### À quoi peut-il servir ?

> À localiser très précisément une plante, un chemin, une conduite, à faire des mesures, etc.

> Couplé à un drone ou à un véhicule (tracteur, quadricoptère, aile fixe) et à un système de navigation, il permet un guidage autonome.

* ### Le RTK, c'est simple ?

> Non ! Cela demande du matériel (donc un budget), un peu de connexion Internet (réseau mobile et environ 10 Mo/heure selon l'emplacement) et un minimum de compréhension de la technologie pour l'utiliser efficacement.

* ### Donc c'est très cher ?

> Oui et non.

> Si vous investissez dans un système dit « propriétaire », il faudra compter entre 2 500 et 15 000 € par antenne.

> Dans le cas de Centipede-RTK, l'idée est d'utiliser des composants génériques et des logiciels open source, ce qui réduit les coûts, à environ 300 € de matériel (sans options), que ce soit pour une Base ou un Rover.

> Le coût total pour une géolocalisation autonome dépasse donc rarement 700 € (base + rover + accessoires).

* ### Pourquoi n'ai-je pas cette précision avec mon smartphone ou mon récepteur GNSS ?

> Parce que les conditions physiques de l'atmosphère, dans l'ionosphère et la troposphère au-dessus de nos têtes, changent en permanence (vent solaire, humidité, etc.) et retardent le signal émis par les satellites, ce qui introduit des biais de mesure (environ 3 à 5 m).

> Parce que votre smartphone ne peut pas collecter l'ensemble des données de navigation satellitaire et des corrections différentielles. Pas assez de précision...

> Il faut du matériel compatible avec les signaux satellites L1 ou L1-L2. Les récepteurs full-band (L1, L2, L5, L6, etc.) sont recommandés pour de meilleures performances.

* ### C'est quoi une base et un rover ?

> Ils utilisent exactement les mêmes composants (antenne de réception + puce de décodage + carte informatique + logiciel), mais leurs fonctions diffèrent.

> * Une **base** est un ensemble de composants qui reçoit les signaux des satellites de navigation (GPS + GLONASS + GALILEO + ...). Sa position est connue avec précision par calcul. Elle calcule en temps réel la différence entre les signaux reçus des satellites et sa position calculée. Ce sont ces variables de correction qui permettent de corriger un rover.

> * Un **rover** est un ensemble de composants qui reçoit les signaux des satellites de navigation (GPS + GLONASS + GALILEO + ...) et reçoit les données de correction d'une base (via le réseau mobile ou la radio). Cette configuration permet de calculer une position géométrique avec une précision centimétrique selon les conditions.

* ### Est-ce que ça émet des ondes ?

... cela dépend où :

> Non, on reçoit en permanence les signaux des satellites en orbite autour de la Terre ; on les capte seulement.

> Oui et non. Les données de correction de la base sont envoyées à un serveur via Wi-Fi ou câble Ethernet (via une box internet personnelle ou un réseau d'entreprise).

> Oui, on utilise la technologie mobile (4G/5G) pour récupérer ces données sur le terrain. On s'appuie donc sur une transmission existante.

> Non, nous avons volontairement choisi cette technologie pour éviter d'ajouter des émissions radio supplémentaires en achetant une fréquence d'émission dédiée. Nous utilisons donc l'infrastructure existante, avec ses avantages et ses inconvénients. [Zones non couvertes (France)](https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/observatoire-des-deploiements-mobiles-en-zones-peu-denses/les-deploiements-mobiles-dans-les-zones-peu-denses.html)

* ### Mon matériel est-il compatible ?

> Le caster (serveur centralisant toutes les bases Centipede-RTK) diffuse des données de correction au format RTCM3. Si votre matériel de géolocalisation prend ce format en charge, vous pouvez vous connecter librement aux bases Centipede-RTK.

* ### Libre d'accès ?

> Le réseau est communautaire, donc aucun identifiant ni mot de passe n'est requis.

> Pour déclarer une base RTK, il faut suivre attentivement les instructions des pages suivantes de ce site.

-----------------------------------------------------------------
