#!/bin/bash

# Script pour créer les labels nécessaires
# Usage: ./create-labels.sh

echo "🏷️ Création des labels pour le système d'invitation..."

# Labels nécessaires pour le système
gh label create "à-examiner" --color "fbca04" --description "Candidature en attente d'examen"
gh label create "approuvé" --color "0e8a16" --description "Candidature approuvée - invitation envoyée"
gh label create "refusé" --color "d73a49" --description "Candidature refusée"
gh label create "invitation" --color "1d76db" --description "Issue d'invitation automatique"

echo "✅ Labels créés avec succès !"
echo ""
echo "📋 Labels disponibles :"
gh label list