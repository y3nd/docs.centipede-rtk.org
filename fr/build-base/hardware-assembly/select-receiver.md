# Sélectionner un récepteur GNSS de base
Lors de la construction d'une base, la première étape consiste à choisir un récepteur GNSS qui servira de base. Le choix du récepteur dépendra de plusieurs facteurs, tels que le budget, les performances requises, les bandes et signaux pris en charge, ainsi que la compatibilité avec le réseau Centipede-RTK.

Les meilleures performances sont obtenues avec le [récepteur Septentrio Mosaic-X5](./receivers/septentrio-mosaic-x5.md). Le [récepteur Unicore UM980](./receivers/unicore-um98x.md) peut également être utilisé comme alternative moins coûteuse. Le récepteur u-blox F9P n'est plus accepté comme nouvelle station de base [déclarée](../declaration.md) dans le réseau Centipede-RTK, en raison de son support limité des signaux.

## Modèles de récepteurs sélectionnés
- [Septentrio Mosaic-X5](./receivers/septentrio-mosaic-x5.md)
- [Unicore UM980/UM982](./receivers/unicore-um98x.md)

## Récepteurs futurs
- Le module u-blox X20P n'est pas encore utilisable, car la constellation GLONASS n'est pas prise en charge par le firmware actuel. D'autres récepteurs pourront aussi être envisagés, sous réserve d'approbation au cas par cas. ***rtkbase* n'est pas encore compatible d'autres récepteurs que les ublox F9P, Mosaic-X5 et UM98x.**
