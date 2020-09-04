#!/usr/bin/env bash
#Lorsque l'on exécute la commande read, mais qu'on ne spécifie pas de variables à associer au contenu rentré
# par l'utilisateur, la chaîne saisie sera stockée dans une variable interne appelée $REPLY
read valeur0

echo $REPLY
#valeur0 on récupère la dérnière valeur qu'on a mis dans read ( voir le read la ligne dessus => read valeur0)