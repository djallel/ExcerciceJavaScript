#!/usr/bin/env bash
#Faire un script prenant deux arguments :
#
#- Premier argument : nom d'un fichier
#
#- Deuxième argument : peut prendre plusieurs valeurs comme
# copy (copie le fichier dans le répertoire /tmp/script),
# delete (supprime le fichier)
# et read (lire le fichier).
#Il faudra créer une fonction qui vérifiera que le fichier rentré en argument existe bien, et utiliser les case pour les différentes possibilités).

#Fonction verifiant si le fichier existe
function verif_fichier_existe() {
  ls -l $1 >/dev/null
  case $? in
  0)
    echo "Le fichier $1 existe bien"
    return 0
    ;;
  *) #* veut dire si c'est autre chose que 0
    echo "Le fichier $1 n'existe pas"
    return 1
    ;;
  esac
}

#Verifie si l'utilisateur a bien indiqué un nom de fichier
if [ -z $1 ] || [ -z $2 ]; then # vérifie si la variable $1 est vide ou si la variable $2 est vide alors afficher echo
  echo "Attention a preciser un nom de fichier et l'action"
  echo "Actions disponibles :  copy, delete, ou read"
  exit 1
fi

#Execution de la fonction de verification
verif_fichier_existe $1
if [ $? -ne 0 ]; then
  exit 2
fi

#Actions à exécuter
case "$2" in
copy)
  mkdir /tmp/script 2>/dev/null
  cp $1 /tmp/script/
  if [ $? -eq 0 ]; then # si le code retour est égale à 0 tout s'est bien passé
    echo "Le fichier $1 a bien été copié dans /tmp/script"
  else
    echo "Une erreur a eu lieu au moment de la copie"
    exit 3
  fi
  ;;
delete)
  rm $1 # je supprime le nom du fichier qui correspond à l'argument 1 ($1)
  if [ $? -eq 0 ]; then # si le code retour est égale à 0 tout s'est bien passé
    echo "Le fichier $1 a bien été supprimé"
  else
    echo "Une erreur a eu lieu au moment de la suppression"
    exit 4
  fi
  ;;
read)
  cat $1
  if [ $? -eq 0 ]; then # si le code retour est égale à 0 tout s'est bien passé
    exit 0
  else
    echo "Une erreur a eu lieu au moment de la lecture"
    exit 5
  fi
  ;;
esac
