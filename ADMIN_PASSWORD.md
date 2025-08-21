# 🔐 Mot de Passe Admin - LiberChat Collectif

## Accès Interface Admin

**URL :** https://liberchat.github.io/Liberchat-collectif/admin.html

**Mot de passe :** `Anarcho2024!Collectif`

## Sécurité

- Hash SHA-256 stocké dans le code
- Mot de passe fort : majuscules, minuscules, chiffres, symboles
- 19 caractères de longueur
- Thématique anarcho-syndicaliste

## Changement du Mot de Passe

Pour changer le mot de passe :

1. **Générer le nouveau hash :**
   ```bash
   echo -n "NOUVEAU_MOT_DE_PASSE" | sha256sum
   ```

2. **Remplacer dans admin.js :**
   ```javascript
   const adminPasswordHash = 'NOUVEAU_HASH_ICI';
   ```

3. **Commit et push**

## Diffusion

⚠️ **CONFIDENTIEL** - À communiquer uniquement aux administrateurs du collectif.

**Canaux sécurisés :**
- Signal/Telegram chiffré
- Rencontre physique
- Email PGP

---

**Solidarité • Action Directe • Logiciel Libre**