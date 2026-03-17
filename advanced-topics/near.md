# NEAR mountpoint
- The `NEAR` mountpoint provides corrections from the closest base station to your location.
- Only declared bases, that are in the mounttable of the caster, are considered for the `NEAR` mountpoint.
- 1 km hysteresis is applied to avoid frequent switching between bases when moving around.
- The `NEAR4` mountpoint provides the same corrections as `NEAR`, but with a compact version of the RTCM3 messages, which reduces data consumption and improves stability of the connection. It is recommended to use `NEAR4` for most applications, as it [doesn't reduce accuracy whatsoever](#measurement-resolution-comparison).

## NEAR4
- On the `NEAR4` mountpoint, the `NEAR` stream's MSM7 messages are converted to MSM4 messages, which removes information such as
  - Decimals on pseudoranges and carrier phases, which are already under the noise level of the measurements (<1mm)
  - Decimals on signal strength (C/No), which are not useful for the rover
  - Doppler information, which is useful only for extremely specific applications and not supported by most rovers
- The resulting RTCM3 stream is smaller than the original MSM7 stream, which reduces data consumption and can improve stability of the connection

## Measurement Resolution Comparison
| Observable                  | MSM4 Resolution                         | MSM7 Resolution                          | Notes                                       |
| --------------------------- | --------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| **Fine Pseudorange**        | **1/1024 m ≈ 0.0009765625 m (0.98 mm)** | **1/16384 m ≈ 0.000061035 m (0.061 mm)** | MSM7 is 16× finer                           |
| **Fine Carrier Phase**      | **1/256 cycle ≈ 0.00390625 cycle**      | **1/4096 cycle ≈ 0.0002441406 cycle**    | MSM7 is 16× finer                           |
| **C/N0 (Carrier-to-Noise)** | **1 dB-Hz**                             | **0.0625 dB-Hz (1/16)**                  | MSM7 allows finer signal strength reporting |

### Carrier Phase in Distance Units

Carrier phase resolution depends on signal wavelength. For example with **GPS L1 (λ ≈ 0.19029367 m)**:

| Observable               | MSM4          | MSM7           |
| ------------------------ | ------------- | -------------- |
| Carrier phase resolution | ≈ **0.74 mm** | ≈ **0.046 mm** |

### Summary of the Differences

* **MSM7 provides 16× finer precision** than MSM4 for pseudorange and carrier phase.
* **C/N0 precision improves from 1 dB-Hz → 0.0625 dB-Hz**.

### Practical Impact

* In real GNSS receivers, raw measurement noise is typically:

  * **Code:** ~20–30 cm
  * **Carrier phase:** ~1–2 mm

### Conclusion
**MSM4 already exceeds receiver noise for code measurements**

