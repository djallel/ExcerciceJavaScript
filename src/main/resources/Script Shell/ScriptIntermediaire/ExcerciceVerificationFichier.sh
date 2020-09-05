#!/usr/bin/env bash

#Attention, vous n'avez pas saisi les noms des fichiers

#le fichier toto n'existe pas
#le fichier titi n'existe pas
#le fichier tutu n'existe pas

#le fichier tata n'existe pas
#Réaliser le script respectant les règles suivantes :
#•Script auquel on passe en argument une liste de fichiers.

#Recuperation des noms des fichiers
FICHIERS=$@
NOMBRE_ARGUMENTS=$#
#•Le script va d'abord vérifier que l'utilisateur a bien saisi des arguments au moment de lancer le script. Si ce n'est pas le cas, alors le script sort avec une erreur 2.
function verif_arguments() {
  if [ -$NOMRE_ARGUMENTS -eq 0 ]; then
    echo "Attention, vous n'avez pas saisi les noms des fichiers"
      exit 2
  fi

}



#•Le script va vérifier si ces fichiers existent ou n'existent pas et nous afficher la réponse à l'écran.
function verif_fichier_existe() {
    for FICHIER in $FICHIERS ; do
        ls $FICHIER 2> /dev/null # => cette ligne permet de rediriger le code erreur 2 vers /dev/null
        if [ $? -eq 0 ]; then # cette ligne veut dire que si le code retour de la commande ls $FICHIER égale à 0
            echo "Le fichier $FICHIER existe"
        else
            echo "Le fichier $FICHIER n'existe pas"
        fi
    done
}
#•Les commandes doivent être intégrées à des fonctions. On souhaite deux fonctions distinctes, une pour la vérification du nombre d'arguments et l'autre pour la vérification de l'existence des fichiers.

verif_arguments
verif_fichier_existe $FICHIERS
