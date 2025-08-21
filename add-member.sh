#!/bin/bash

# Script pour ajouter un membre autogéré à distance
# Usage: ./add-member.sh PSEUDO_GITHUB

if [ $# -eq 0 ]; then
    echo "❌ Usage: ./add-member.sh PSEUDO_GITHUB"
    exit 1
fi

NEW_MEMBER="$1"
ADMIN_FILE="admin.js"

# Vérifier si le fichier existe
if [ ! -f "$ADMIN_FILE" ]; then
    echo "❌ Fichier admin.js introuvable"
    exit 1
fi

# Vérifier si l'admin existe déjà
if grep -q "'$NEW_MEMBER'" "$ADMIN_FILE"; then
    echo "⚠️  $NEW_MEMBER est déjà dans la liste"
    exit 0
fi

# Ajouter le membre dans la liste
sed -i "s/const authorizedMembers = \[/const authorizedMembers = ['$NEW_MEMBER', /" "$ADMIN_FILE"

echo "✅ $NEW_MEMBER ajouté à la liste des membres autogérés"

# Commit et push automatique
git add "$ADMIN_FILE"
git commit -m "👤 Ajout membre autogéré: $NEW_MEMBER"
git push origin main

echo "🚀 Changements poussés sur GitHub"