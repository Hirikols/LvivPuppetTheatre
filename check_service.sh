while :
do 
    if [ $(curl -I 10.26.0.173:3000 | head -n1 | cut  -d " " -f 2) == 200 ]; then 
        break
        sleep 1
    fi
done