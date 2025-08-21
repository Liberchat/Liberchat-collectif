#!/bin/bash

# Script pour ajouter un admin à distance
# Usage: ./add-admin.sh PSEUDO_GITHUB

if [ $# -eq 0 ]; then
    echo "❌ Usage: ./add-admin.sh PSEUDO_GITHUB"
    exit 1
fi

NEW_ADMIN="$1"
ADMIN_FILE="admin.js"

# Vérifier si le fichier existe
if [ ! -f "$ADMIN_FILE" ]; then
    echo "❌ Fichier admin.js introuvable"
    exit 1
fi

# Vérifier si l'admin existe déjà
if grep -q "'$NEW_ADMIN'" "$ADMIN_FILE"; then
    echo "⚠️  $NEW_ADMIN est déjà dans la liste"
    exit 0
fi

# Ajouter l'admin dans la liste
sed -i "s/const adminUsers = \[/const adminUsers = ['$NEW_ADMIN', /" "$ADMIN_FILE"

echo "✅ $NEW_ADMIN ajouté à la liste des admins"

# Commit et push automatique
git add "$ADMIN_FILE"
git commit -m "👤 Ajout admin: $NEW_ADMIN"
git push origin main

echo "🚀 Changements poussés sur GitHub"