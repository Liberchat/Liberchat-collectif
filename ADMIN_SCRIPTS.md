# 🛠️ Scripts de Gestion des Admins

## Ajout d'un Admin

```bash
./add-admin.sh PSEUDO_GITHUB
```

**Exemple :**
```bash
./add-admin.sh nouveauMembre
```

## Suppression d'un Admin

```bash
./remove-admin.sh PSEUDO_GITHUB
```

**Exemple :**
```bash
./remove-admin.sh ancienMembre
```

## Liste Actuelle des Admins

```bash
grep "adminUsers" admin.js
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

**⚠️ Réservé aux admins autogérés du collectif**