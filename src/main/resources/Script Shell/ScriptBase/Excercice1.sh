#!/usr/bin/env bash

#De quelle manière peut-on écrire un code qui permette d'afficher à l'écran :
#
#Bonjour à tous, je m'appelle Jordan
#
#Formation Bash

echo "Bonjour à tous, je m'appelle Jordan"

#Quelle est la commande à taper pour demander à l'utilisateur de rentrer son nom et de le stocker dans la variable NAME ?

read -p "rentrez votre nom" NOM

#Quelle est la commande à taper pour demander à l'utilisateur de rentrer son âge et de la stocker dans la variable age ?

read -p "Quel est votre âge ?" AGE

#Quelle est la commande à taper pour afficher à l'écran : "Bonjour NOM, tu as AGE ans." en remplaçant NOM et AGE par les valeurs entrées par l'utilisateur ?
echo "Bonjour $NAME, tu as $AGE ans"
