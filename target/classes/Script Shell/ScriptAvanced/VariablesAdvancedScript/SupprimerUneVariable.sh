#!/usr/bin/env bash

#Supprimer une variable
#La commande unset permet de supprimer la variable à condition que celle-ci ne soit pas protégée par
# une instruction readonly.
#•Attention, il ne s'agit pas de supprimer la valeur associée à la variable,
# mais bien de supprimer la variable elle-même (en libérant l'espace mémoire lui étant affecté).
variableAsupprimer="Djallel"
echo $variableAsupprimer;
unset variableAsupprimer
echo $variableAsupprimer