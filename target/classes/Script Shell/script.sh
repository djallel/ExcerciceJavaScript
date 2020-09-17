#!/usr/bin/env bash
echo "Bonjour à tous, je m'appelle Jordan"

PRENOM="Jordan"
NOM="ASSOULINE"
echo "Bonjour $PRENOM $NOM et bienvenu"

read -p "Quelle est votre nom : " NOM
echo " $NOM"

PRENOM="Jordan" NOM="ASSOULINE" AGE="16"
echo "Bonjour $PRENOM ${NOM}, vous avez ${AGE}ans"

#!/bin/bash
PRENOM="Jordan"
NOM="ASSOULINE"
MACHINE=${hostname}
echo "Bonjour $PRENOM $NOM et bienvenu sur la machine ${MACHINE}."

#!/bin/bash
PRENOM="Jordan" NOM="ASSOULINE" MACHINE=`hostname`
echo "Bonjour $PRENOM $NOM et bienvenu sur la machine ${MACHINE}."

AGE=""
read -p "Quelle est votre age : " AGE