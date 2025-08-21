#!/bin/bash

# Script pour retirer un admin à distance
# Usage: ./remove-admin.sh PSEUDO_GITHUB

if [ $# -eq 0 ]; then
    echo "❌ Usage: ./remove-admin.sh PSEUDO_GITHUB"
    exit 1
fi

ADMIN_TO_REMOVE="$1"
ADMIN_FILE="admin.js"

# Vérifier si le fichier existe
if [ ! -f "$ADMIN_FILE" ]; then
    echo "❌ Fichier admin.js introuvable"
    exit 1
fi

# Vérifier si l'admin existe
if ! grep -q "'$ADMIN_TO_REMOVE'" "$ADMIN_FILE"; then
    echo "⚠️  $ADMIN_TO_REMOVE n'est pas dans la liste"
    exit 0
fi

# Retirer l'admin de la liste
sed -i "s/'$ADMIN_TO_REMOVE', //g" "$ADMIN_FILE"
sed -i "s/, '$ADMIN_TO_REMOVE'//g" "$ADMIN_FILE"

echo "✅ $ADMIN_TO_REMOVE retiré de la liste des admins"

# Commit et push automatique
git add "$ADMIN_FILE"
git commit -m "❌ Retrait admin: $ADMIN_TO_REMOVE"
git push origin main

echo "🚀 Changements poussés sur GitHub"