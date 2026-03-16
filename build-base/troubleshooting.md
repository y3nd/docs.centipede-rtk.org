# Troubleshooting
## LEDs are blinking but I cannot connect to the base through basegnss.local or the IP address
  - Check that you are on the same local network as the base (connected to the same WiFi or Ethernet network).
  - Check that the IP address of the base is correct. You can check it on your router or by using a network scanning tool.
  - Restart the base by pulling the power cable and plugging it back in.
  - In last resort, reflash SD card with a new image of RTKBase.
  - If you have a Orange Livebox 5 and Orange Pi Zero board, you may encounter a compatibility issue. In this case, you can try to connect the base to a switch first and then connect the switch to the Livebox. This should solve the issue.
## Base is missing on the map or disabled
  - Check that the name of the base is available on the map.
  - The position configured in the base may be incorrect. Check that it is matching the one calculated in the previous step and that you have not swapped latitude and longitude or set the wrong elevation.
  - Check that the Ntrip service is enabled and correctly configured.
  - Check that the base has an internet connection where crtk.net can be reached (check the network settings and try to ping crtk.net from the base).
## Base has a blue marker on the map
  - Base is not declared yet on the Centipede-RTK network. Follow the instructions on the next page to declare it.
  - Wait a few days to get the base declared
  - Note that the mountpoint is still usable even if the base is not declared yet
## Base has little to no signals shown on the rtkbase homepage graphs.
  - Main service should be enabled.
  - The receiver must be connected to the antenna and to the computer
  - The receiver should be configured correctly. Try "Detect and configure" in RTKBase settings.
  - Check that the antenna, the cable and its connectors are not damaged or corroded. Connectors should be clean and properly tightened.