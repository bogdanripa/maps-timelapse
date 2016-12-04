Take a screenshot every 2 minutes, then generate a video file from all frames. Works on mac, could work on Windows and Linux as well with slight changes

1. Open maps.google.com, navigate to a specific location, enable the "Traffic" layer
2. Open developer tools / console / paste the contents from script.js

Every 2 minutes, the script will disable then re-enable the traffic layer, thus refreshig it

3. Open a terminal / shell window, and run the "run.sh" script. This will make a screenshot every 2 minutes. Adjust the script to capture the screen section that you want
4. Once done, run the "generate.sh" script to generate the video file

