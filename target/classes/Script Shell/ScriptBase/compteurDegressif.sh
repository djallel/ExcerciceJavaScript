#!/usr/bin/env bash
#Code permettant de réaliser un compteur qui commencer au chiffre rentré par l'utilisateur et qui descend jusqu'à 1
CHIFFRE="0"
read -p "entrer un chiffre pour décrémenter" CHIFFRE
echo CHIFFRE

for (( i = $CHIFFRE; i > 1; i-- )); do
    echo $i
done

while [ $CHIFFRE -gt 0 ]; do
    echo $CHIFFRE
    CHIFFRE=`expr $CHIFFRE - 1`
done