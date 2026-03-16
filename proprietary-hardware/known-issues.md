# Known issues
## CHCNAV & John Deere SF6000 SF7000 SF7500 serial throughput too low for full-frequency RTK corrections
Some John Deere and CHCNAV GNSS receivers seem to have serial throughput limitations of around 9600 bps, which is insufficient for receiving full-frequency RTK corrections (which can require 20,000 bps or more depending on the GNSS base signals). This can happen when using `NEAR` endpoint or when directly connecting to a full-frequency base.
- Symptoms
  - The tractor console displays a correction age that increases indefinitely.
- Solutions
  - Use the mountpoint `NEAR4` which provides a compact version of the `NEAR` stream. Use of `NEAR4` stream is also recommended to reduce data consumption and improve stability of the connection. **It doesn't reduce accuracy whatsoever.**
  - Manually select another base with a lower number of signals
  - Upgrade to an alternative GNSS receiver like CRG RTK Receiver