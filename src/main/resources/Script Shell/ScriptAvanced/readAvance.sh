#!/usr/bin/env bash

read -a arraytab valeur0 valeur1 valeur2

echo ${arraytab}
#valeur0 retourne que la premiere valeur

echo ${arraytab[*]}
#valeur0 valeur1 valeur2 => retourne toute les vleurs du tableau

echo ${arraytab[@]}
#valeur0 valeur1 valeur2 => retourne toute les vleurs du tableau même chose que ${arraytab[*]}


read valeur0

echo $REPLY
#valeur0 on récupère la dérnière valeur qu'on a mis dans read ( voir le read la ligne dessus => read valeur0)

#readonly
read -p "entrer votre age" AGE
readonly AGE
AGE="16";
echo $AGE