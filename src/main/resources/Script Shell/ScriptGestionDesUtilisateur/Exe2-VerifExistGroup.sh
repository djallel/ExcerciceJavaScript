#!/usr/bin/env bash

#Script capable de vérifier si le nom du groupe saisi correspond à un nom de groupe existant.
#
#Pistes :
#
#•Utiliser le contenu du fichier /etc/group
#
#•Se servir de la commande cut

function check_if_group_exist() {

#Recupération de la liste des groupes
LIST_GROUPS=`cat /etc/group | cut -d: -f1`

for GROUP in $LIST_GROUPS
do
        if [ $1 = $GROUP ]
        then
                #echo "Le groupe $1 semble déjà exister"
                return 1
        fi
done

}


clear
read -p "Merci d'entrer le nom du groupe à vérifier : " NAME
#Verifie si le groupe n'existe pas déjà
check_if_group_exist $NAME
if [ $? -eq 1 ]
then
        echo "Le groupe $NAME semble déjà exister"
        exit 1

else
        echo "Le groupe $NAME ne semble pas exister"
fi


