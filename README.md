<div align="center">

![Liberchat-collectif Logo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgZmlsbD0iI2NjMDAwMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1zaXplPSIxMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIj7ijqY8L3RleHQ+PC9zdmc+)

# 🚀 Liberchat-collectif Collectif - Système d'adhésion automatique

**Solidarité • Action Directe • Logiciel Libre**

</div>

## 🌐 Accès direct

**Formulaire de candidature :** https://liberchat-collectif.github.io/Liberchat-collectif

## ✊ Processus d'adhésion

### Pour les candidats :
1. **Remplissez le formulaire complet** → Infos personnelles, compétences, idéologie
2. **Soumettez votre candidature** → Issue GitHub créée automatiquement
3. **Attendez la validation** → L'équipe examine votre profil
4. **Recevez l'invitation** → Si approuvé, invitation GitHub automatique

### Pour les admins :
1. **Candidature reçue** → Issue avec label `à-examiner`
2. **Examinez le profil** → Compétences + vision idéologique
3. **Décidez d'un clic** → Label `approuvé` ou `refusé`
4. **Action automatique** → Invitation envoyée ou refus notifié

## 📋 Critères de sélection

### Obligatoires :
- ✅ Compétences techniques démontrées
- ✅ Vision idéologique alignée avec le logiciel libre
- ✅ Position claire sur la propriété intellectuelle
- ✅ Motivation sincère et détaillée

### Appréciés :
- 🎯 Projets open source existants
- 🎯 Engagement militant pour le libre
- 🎯 Disponibilité pour contribuer
- 🎯 Idées de projets innovants

## 🔧 Configuration technique

### Installation :
1. **Fork ce repo** dans votre organisation
2. **Activez GitHub Pages** (Settings → Pages → Source: Deploy from branch)
3. **Configurez les permissions** (Settings → Actions → Allow all actions)
4. **Personnalisez** le nom d'organisation dans les fichiers

### Fichiers clés :
- `index.html` → Formulaire de candidature
- `invite.js` → Logique de soumission
- `.github/workflows/auto-invite.yml` → Processus de validation
- `.github/ISSUE_TEMPLATE/invitation.md` → Template d'issue

## 🛡️ Sécurité & Modération

### Avantages :
- 🔒 **100% GitHub natif** (aucun serveur externe)
- 📊 **Traçabilité complète** via les issues
- 🤖 **Semi-automatique** (validation humaine + action auto)
- 🔄 **Révocable** à tout moment
- 💾 **Backup automatique** quotidien
- 🛡️ **Protection anti-sabotage**

### Modération :
- Historique complet des candidatures
- Possibilité de revert via Git
- Exclusion possible des membres problématiques
- Sauvegarde automatique du repo

## 📈 Statistiques

- **Temps de traitement** : < 5 minutes après validation
- **Taux d'automatisation** : 95% (seule la décision est manuelle)
- **Coût** : 0€ (GitHub gratuit)
- **Maintenance** : Aucune

## 🚀 Déploiement rapide

```bash
# 1. Cloner le repo
git clone https://github.com/Liberchat/Liberchat-collectif.git

# 2. Personnaliser l'organisation
sed -i 's/Liberchat/VOTRE-ORG/g' *.js *.yml

# 3. Push et activer GitHub Pages
git add . && git commit -m "Setup" && git push
```

**✅ Système opérationnel en 2 minutes !**