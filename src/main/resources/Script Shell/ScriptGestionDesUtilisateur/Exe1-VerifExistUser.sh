#!/usr/bin/env bash
#https://www.udemy.com/course/scripting-shellbash-automatisez-votre-systeme-linux/learn/practice/27708/introduction#overview
#Script capable de vérifier si le nom d'utilisateur saisi correspond à un nom d'utilisateur déjà existant.
#
#Quelques pistes :
#
#- Utiliser le contenu du fichier /etc/passwd
#
#- Se servir de la commande cut

function check_if_user_exist() {

#Recupération de la liste des utilisateur
LIST_USERS=`cat /etc/passwd | cut -d: -f1`

for USERS in $LIST_USERS
do
        if [ $1 = $USERS ]
        then
                #echo "L'utilisateur $1 semble déjà exister"
                return 1
        fi
done

}


clear
read -p "Merci d'entrer le nom de l'utilisateur à vérifier : " NAME
#Verifie si l'utilisateur n'existe pas déjà
check_if_user_exist $NAME
if [ $? -eq 1 ]
then
        echo "L'utilisateur $NAME semble déjà exister"
        exit 1

else
        echo "L'utilisateur $NAME ne semble pas exister"
fi





