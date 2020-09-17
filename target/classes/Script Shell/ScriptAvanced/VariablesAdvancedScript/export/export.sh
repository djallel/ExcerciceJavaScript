#!/usr/bin/env bash
#Pour qu'un processus "père" puisse faire connaître une variable à son processus "fils", il doit l'exporter avec la commande export.

PRENOM="Jordan"
script_export.sh #ICI IL va pas reconnaitre le PRENOM car il n'est pas exporté

export PRENOM
script_export.sh #ICI IL va  reconnaitre le PRENOM car il est exporté
