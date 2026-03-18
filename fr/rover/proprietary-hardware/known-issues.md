# Problèmes connus
## CHCNAV & John Deere SF6000 SF7000 SF7500 débit série trop faible pour les corrections RTK full-frequency
Certains récepteurs GNSS John Deere et CHCNAV semblent avoir des limites de débit série d'environ 9600 bps, ce qui est insuffisant pour recevoir des corrections RTK full-frequency (qui peuvent nécessiter 20 000 bps ou plus selon les signaux de base GNSS). Cela peut se produire lors de l'utilisation du point de terminaison `NEAR` ou lors d'une connexion directe à une base full-frequency.
- Symptômes
  - La console du tracteur affiche un âge de correction qui augmente indéfiniment.
- Solutions
  - Utiliser le mountpoint `NEAR4`, qui fournit une version compacte du flux `NEAR`. L'utilisation du flux `NEAR4` est également recommandée pour réduire la consommation de données et améliorer la stabilité de la connexion. **[cela ne réduit en rien la précision](../../advanced-topics/near.md#comparaison-de-la-résolution-des-mesures)**
  - Sélectionner manuellement une autre base avec un plus petit nombre de signaux
  - Passer à un autre récepteur GNSS comme le CRG RTK Receiver
