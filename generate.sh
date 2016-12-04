ffmpeg -framerate 15 -start_number 001 -i img%03d.png -c:v libx264 -r 30 -pix_fmt yuv420p out.mp4#sf-nov-12-2016-15fps.mp4
