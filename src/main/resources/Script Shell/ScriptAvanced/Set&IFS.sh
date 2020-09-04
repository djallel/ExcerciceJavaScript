#•Lorsque des instructions avec la commande set sont effectuées, le Shell parvient à isoler et stocker les différentes valeurs dans les variables de positionnement.
#•C'est la variable IFS qui contient les caractères devant être utilisés pour la séparation des différentes valeurs (par défaut il s'agit de l'espace)
CHAINE="Bonjour:je:suis:Jordan"
IFS=:
Set $CHAINE
echo $2
#je