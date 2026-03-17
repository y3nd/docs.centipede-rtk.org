---
title: Frequently Asked Questions
---
# Frequently Asked Questions

* ### What is it for?

> To determine your geographic position with centimeter-level accuracy.

* ### What can it be used for?

> To locate things very precisely such as a plant, a path, a pipe, to take measurements, ...

> When combined with a drone (tractor, quadcopter, fixed wing) and a navigation system, it enables an autonomous guidance system.

* ### Is RTK simple?

> No! It requires some hardware (therefore some money), a bit of Internet connectivity (cellular and about 10 MB/hour, depending of the location), and some understanding of the technology to use it effectively.

* ### So is it very expensive?

> Yes and No.

> If you invest in a so-called "proprietary" system, you will need to invest between €2500 and €15000 per antenna.

> In the case of the Centipede-RTK project, the idea is to use generic components and open-source software, so the costs are reduced, around €300 for hardware (without options), whether it is a Base or a Rover.

> The total cost for autonomous geolocation therefore rarely exceeds €700 (base + rover + accessories).

* ### Why don't I get this accuracy with my smartphone or GNSS receiver?

> Because physical conditions in the atmosphere (ionosphere and troposphere, basically above our heads) constantly change (solar wind, humidity, etc.) and delay the signal emitted by satellites, which introduces measurement bias (around 3–5 m).

> Because your smartphone cannot collect the full set of satellite navigation data and differential correction data. Not enough precision...

> You need hardware compatible with L1 or L1-L2 satellite signals. Full-band receivers (L1, L2, L5, L6 etc.) are recommended for best performance.

* ### What is a base and a rover?

> They use exactly the same components (receiving antenna + decoding chip + single-board computer + software), but they have different functions.

> * A **base** is a set of components that receives signals from navigation satellites (GPS + GLONASS + GALILEO + ...). Its position is precisely known through calculation. It computes in real time the difference between the signals received from satellites and its calculated position. These correction variables are what allow a Rover to be corrected.

> * A **rover** is a set of components that receives signals from navigation satellites (GPS + GLONASS + GALILEO + ...) and receives correction data from a base (via cellular or radio). This setup makes it possible to calculate a geometric position with centimeter-level accuracy depending on the conditions.

* ### Does it emit waves?

... it depends where:

> No, we continuously receive signals from satellites orbiting the Earth; we only capture them.

> Yes and No. The correction data from the base are sent to a server via WiFi or Ethernet cable (through a modem personal internet box or company network).

> Yes, we use mobile technology (4–5G) to retrieve this data in the field. Therefore, we use an existing transmission.

> No, we deliberately chose this technology to avoid introducing additional radio emissions through the purchase of a dedicated transmission frequency. We therefore use existing infrastructure, with its advantages and disadvantages. [coverage gaps (France)](https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/observatoire-des-deploiements-mobiles-en-zones-peu-denses/les-deploiements-mobiles-dans-les-zones-peu-denses.html)

* ### Is my hardware compatible?

> The caster (server centralizing all Centipede-RTK Bases) transmits correction data in RTCM3 format. If your geolocation hardware supports this format, you can freely connect to Centipede-RTK Bases.

* ### Freely?

> The network is community-based, so no login or password is required.

> To declare an RTK base, it is necessary to carefully follow the instructions on the next pages of this site.

-----------------------------------------------------------------