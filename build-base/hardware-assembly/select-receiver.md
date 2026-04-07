# Select a base GNSS receiver
When building a base station, the first step is to select a GNSS receiver that will be used as the base. The choice of the receiver will depend on several factors, such as the budget, the required performance, the supported bands and signals, and the compatibility with the Centipede-RTK network.

Best performance is reached with [Septentrio Mosaic-X5 receiver](./receivers/septentrio-mosaic-x5.md). [Unicore UM980 or UM982 receivers](./receivers/unicore-um98x.md) can also be used, as lower-cost alternatives. u-blox F9P receiver is not accepted anymore as a [declared](../declaration.md) base station in the Centipede-RTK network, due to its limited signal support.

## Selected receiver models
- [Septentrio Mosaic-X5](./receivers/septentrio-mosaic-x5.md)
- [Unicore UM980/UM982](./receivers/unicore-um98x.md)

## Future receivers
- u-blox X20P module is not usable yet since GLONASS constellation is not supported on current firmware. Other receivers may also be considered, subject to approval on a case-by-case basis. ***rtkbase* is not compatible yet with other receivers than ublox F9P, Mosaic-X5 and UM98x.**
