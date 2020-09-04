#!/usr/bin/env bash
#La commande cut permet de sélectionner un champ ou un caractère précis dans une ligne. Elle prend différentes options :
#•-f : découpe la ligne suivant le caractère tabulation
#•-d : spécifie un autre caractère de séparation
#•-s : ignore les lignes ne contenant pas de caractère de séparation
#Affichage du début de chaque ligne jusqu'à trouver un ":"
cat texte.txt | cut –d: -f1
#Affichage des deux premiers champs de chaque ligne en utilisant : comme délimitateur
cat texte.txt | cut –d: -f1-2
