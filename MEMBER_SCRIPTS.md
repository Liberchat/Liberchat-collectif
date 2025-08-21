# 🛠️ Scripts de Gestion des Membres Autogérés

## Ajout d'un Membre Autogéré

```bash
./add-member.sh PSEUDO_GITHUB
```

**Exemple :**
```bash
./add-member.sh nouveauMembre
```

## Suppression d'un Membre Autogéré

```bash
./remove-member.sh PSEUDO_GITHUB
```

**Exemple :**
```bash
./remove-member.sh ancienMembre
```

## Liste Actuelle des Membres Autogérés

```bash
grep "authorizedMembers" admin.js
```

## Fonctionnalités

- ✅ **Ajout automatique** dans la liste
- ✅ **Vérification des doublons**
- ✅ **Commit et push automatique**
- ✅ **Messages de commit descriptifs**
- ✅ **Gestion d'erreurs**

## Utilisation à Distance

1. **SSH sur le serveur**
2. **Naviguer vers le repo**
3. **Exécuter le script**
4. **Changements appliqués instantanément**

---

**⚠️ Réservé aux membres autogérés du collectif**