n=-1
j=1
for i in {1..600000}
 do date=$(date +'%Y-%m-%d %H:%M:%S')
 read Y M D h m s <<< ${date//[-: ]/ }
 echo $date
 m=${m#0}
 if ! ((m % 2)); then
  if [ "$n" != "$m" ]; then
    echo "NOWWWWWWWWWWWWWWWWWWWWWWWWWWWWW $n $m"
    n=$m
    k=$(printf "%03d" $j)
    j=$((j + 1))
    screencapture -tpng -R200,155,750,590 "img$k.png"
  fi
 fi
 sleep 1
done
