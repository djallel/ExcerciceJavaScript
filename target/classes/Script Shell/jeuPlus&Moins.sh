#!/usr/bin/env bash

#Génération d'un chiffre aléatoire

min=1

max=50

nombre=$[($RANDOM % ($[$max - $min] + 1)) + $min]

chiffre=0

while [ $chiffre -ne $nombre ]

do

    echo "Le chiffre à trouver est compris entre $min et $max. Trouvez le !"

    read chiffre

    if [ $chiffre -lt $nombre ]

    then

        echo "Le chiffre est plus grand"

    elif [ $chiffre -gt $nombre ]

    then

        echo "Le chiffre est plus petit"

    fi

done

echo "Trouvé !! Le chiffre était : $nombre"