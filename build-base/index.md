---
prev: false
next:
  text: "Antenna location"
  link: "/build-base/antenna-location"
---

# Building an RTK Base station

Standard geolocation only has an accuracy of a few meters because atmospheric disturbances (among other factors) cause errors in satellite signals.

To obtain centimeter-level accuracy, it is necessary to have a static GNSS receiver: a **Base station**.

It must be fixed on a stable support with a clear view of the sky. It knows its position very precisely (to the millimeter) and **observes 24/7 all satellites** (GPS, GLONASS, Galileo, Beidou and local systems like QZSS and IRNSS/NavIC).

A base in the **Centipede-RTK network** must operate **24 hours a day, 365 days a year**.

The result is a **data stream (RTCM3)** of observations that will be used by another GNSS receiver (the **Rover**) to correct its position.

:::info
Already have a base station? You can connect it to the Centipede-RTK network. See [this page](../connect-base/) for more details.
:::

Most RTK receivers can be used either as a **Rover or as a Base**. The following pages will allow you to **build and deploy your own GNSS RTK base**.
