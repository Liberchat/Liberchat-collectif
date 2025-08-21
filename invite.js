function submitForm(e) {
    e.preventDefault();
    
    const form = document.getElementById('adhesionForm');
    const messageDiv = document.getElementById('message');
    
    // Vérification des champs requis
    const required = ['github', 'nom', 'email', 'niveau', 'langages', 'motivation', 'ideologie', 'propriete'];
    for (let field of required) {
        if (!document.getElementById(field).value.trim()) {
            messageDiv.innerHTML = '<div class="error">❌ Veuillez remplir tous les champs obligatoires</div>';
            return;
        }
    }
    
    // Collecte des données
    const data = {
        github: document.getElementById('github').value.trim(),
        nom: document.getElementById('nom').value.trim(),
        email: document.getElementById('email').value.trim(),
        age: document.getElementById('age').value,
        localisation: document.getElementById('localisation').value.trim(),
        niveau: document.getElementById('niveau').value,
        langages: document.getElementById('langages').value.trim(),
        domaines: document.getElementById('domaines').value.trim(),
        projets: document.getElementById('projets').value.trim(),
        motivation: document.getElementById('motivation').value.trim(),
        decouverte: document.getElementById('decouverte').value,
        disponibilite: document.getElementById('disponibilite').value,
        idees: document.getElementById('idees').value.trim(),
        liens: document.getElementById('liens').value.trim(),
        ideologie: document.getElementById('ideologie').value.trim(),
        propriete: document.getElementById('propriete').value,
        militantisme: document.getElementById('militantisme').value.trim(),
        commentaires: document.getElementById('commentaires').value.trim()
    };
    
    // Formatage pour l'issue GitHub
    const issueBody = `## Candidature de @${data.github}

**Informations personnelles:**
- Nom: ${data.nom}
- Email: ${data.email}
- Âge: ${data.age || 'Non spécifié'}
- Localisation: ${data.localisation || 'Non spécifiée'}

**Compétences techniques:**
- Niveau: ${data.niveau}
- Langages: ${data.langages}
- Domaines: ${data.domaines || 'Non spécifié'}
- Projets: ${data.projets || 'Aucun mentionné'}

**Motivation:**
${data.motivation}

**Vision idéologique:**
${data.ideologie}

**Position propriété intellectuelle:** ${data.propriete}

**Engagement militant:**
${data.militantisme || 'Aucun mentionné'}

**Autres informations:**
- Découverte: ${data.decouverte || 'Non spécifié'}
- Disponibilité: ${data.disponibilite || 'Non spécifiée'}
- Idées: ${data.idees || 'Aucune mentionnée'}
- Liens: ${data.liens || 'Aucun'}
- Commentaires: ${data.commentaires || 'Aucun'}`;
    
    const encodedBody = encodeURIComponent(issueBody);
    const url = `https://github.com/Liberchat/Liberchat-collectif/issues/new?template=invitation.md&title=[INVITE]%20${data.github}&body=${encodedBody}`;
    
    window.open(url, '_blank');
    
    messageDiv.innerHTML = '<div class="success">✅ Candidature prête ! Validez l\'issue GitHub pour finaliser votre adhésion.</div>';
    form.reset();
}

document.getElementById('adhesionForm').onsubmit = submitForm;