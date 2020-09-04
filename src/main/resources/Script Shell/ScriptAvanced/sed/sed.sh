#!/usr/bin/env bash
#Il s'agit d'un éditeur de flux de données,
# qui permet de modifier spécifiquement ligne par ligne, des éléments de la sortie d'une commande.

#•Il est possible d'utiliser sed de deux manières :
#1•Appliquer la commande sed sur le flux d'entrée et récupérer le flux de sortie.
#2•Appliquer la commande sed directement sur un fichier passé en entrée.

#En plus des options et du fameux flux d'entrée,
# sed utilise également un script qui contiendra l'ensemble des actions qu'il devra exécuter.

#•Nous pouvons écrire directement le script dans la ligne de commande grâce
# à l'option –e (chaque commande est séparée de la suivante par des ;)

#•Nous pouvons passer à la commande sed un fichier contenant le script en question grâce à l'option -f

#Utilisation de sed (suppression)
#Afficher toutes les lignes exceptée la ligne numéro 8 :
sed '8 d' texte.txt
#• Afficher toutes les lignes exceptées la ligne 8 et 2 :
sed '2 d; 8 d' texte.txt
#• Afficher toutes les lignes exceptées la ligne 1 à 3 :
sed '1,3 d' texte.txt

#Utilisation de sed (suppression 2)
#Pour utiliser les regex, il faut encadrer le motif par des /.
#•Par exemple pour supprimer toutes les lignes commençant par # :
#Le ^ signifiant : début de ligne
sed '/^#/ d' texte.txt

#On peut aussi utiliser un interval en séparant les deux motifs par une virgule.
#•Par exemple pour supprimer toutes les lignes entre Bonjour et assouline :
sed '/Bonjour/ , /assouline/ d' texte.txt

#Utilisation de sed (substitution)
#•Pour effectuer une substitution il faut utiliser la syntaxe :
sed 's/element_a_substituer/element_substituant/'
#•Substituer ":" par un espace au premier motif rencontré :
sed 's/:/ /'
#•Substituer ":" par un espace sur tous les motifs rencontrés :
sed 's/element_a_substituer/element_substituant/g'

#Utilisation de sed (Translittération)
#Pour effectuer une translittération il faut utiliser la syntaxe :
sed 'y/liste_a_translitterer/liste_de_translittération/'
#Translittérer les e accentués par des e classiques
sed 'y/éè/ee/'

