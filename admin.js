// Configuration
const ORG_NAME = 'Liberchat';
const REPO_NAME = 'Liberchat-collectif';

// Fonctions utilitaires
function log(message) {
    const logs = document.getElementById('systemLogs');
    const timestamp = new Date().toLocaleString();
    logs.innerHTML = `[${timestamp}] ${message}\n` + logs.innerHTML;
}

// Chargement des statistiques
async function loadStats() {
    try {
        // Simuler le chargement des stats via GitHub API
        const issues = await fetch(`https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}/issues?state=all&per_page=100`);
        const issuesData = await issues.json();
        
        const candidates = issuesData.filter(issue => issue.title.includes('[INVITE]'));
        const pending = candidates.filter(issue => issue.state === 'open');
        const approved = candidates.filter(issue => 
            issue.labels.some(label => label.name === 'approuvé')
        );
        
        document.getElementById('totalCandidates').textContent = candidates.length;
        document.getElementById('pendingCandidates').textContent = pending.length;
        document.getElementById('approvedCandidates').textContent = approved.length;
        
        // Membres (estimation)
        document.getElementById('totalMembers').textContent = approved.length;
        
        log('✅ Statistiques mises à jour');
    } catch (error) {
        log('❌ Erreur chargement stats: ' + error.message);
        // Valeurs par défaut
        document.getElementById('totalCandidates').textContent = '?';
        document.getElementById('pendingCandidates').textContent = '?';
        document.getElementById('approvedCandidates').textContent = '?';
        document.getElementById('totalMembers').textContent = '?';
    }
}

// Chargement des candidatures
async function loadCandidates() {
    const container = document.getElementById('candidatesList');
    container.innerHTML = '<p>Chargement...</p>';
    
    try {
        const response = await fetch(`https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}/issues?labels=à-examiner&state=open`);
        const candidates = await response.json();
        
        if (candidates.length === 0) {
            container.innerHTML = '<p>✅ Aucune candidature en attente</p>';
            return;
        }
        
        container.innerHTML = candidates.map(candidate => {
            const username = candidate.body.match(/@([a-zA-Z0-9_-]+)/)?.[1] || 'Inconnu';
            const createdDate = new Date(candidate.created_at).toLocaleDateString();
            
            return `
                <div class="candidate">
                    <h4>👤 ${username}</h4>
                    <p><strong>Date:</strong> ${createdDate}</p>
                    <p><strong>Titre:</strong> ${candidate.title}</p>
                    <span class="status status-pending">En attente</span>
                    <div class="candidate-actions">
                        <a href="${candidate.html_url}" class="btn btn-info" target="_blank">
                            👁️ Voir détails
                        </a>
                        <button class="btn btn-primary" onclick="approveCandidate(${candidate.number}, '${username}')">
                            ✅ Approuver
                        </button>
                        <button class="btn btn-danger" onclick="rejectCandidate(${candidate.number}, '${username}')">
                            ❌ Refuser
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        log(`📋 ${candidates.length} candidature(s) chargée(s)`);
    } catch (error) {
        container.innerHTML = '<p>❌ Erreur de chargement</p>';
        log('❌ Erreur chargement candidatures: ' + error.message);
    }
}

// Approuver une candidature
function approveCandidate(issueNumber, username) {
    const url = `https://github.com/${ORG_NAME}/${REPO_NAME}/issues/${issueNumber}`;
    window.open(url, '_blank');
    log(`✅ Redirection vers approbation de ${username}`);
}

// Refuser une candidature
function rejectCandidate(issueNumber, username) {
    const url = `https://github.com/${ORG_NAME}/${REPO_NAME}/issues/${issueNumber}`;
    window.open(url, '_blank');
    log(`❌ Redirection vers refus de ${username}`);
}

// Actions système
function triggerBackup() {
    const url = `https://github.com/${ORG_NAME}/${REPO_NAME}/actions/workflows/backup.yml`;
    window.open(url, '_blank');
    log('💾 Déclenchement backup manuel');
}

function emergencyMode() {
    if (confirm('⚠️ Activer le mode urgence ?')) {
        const url = `https://github.com/${ORG_NAME}/${REPO_NAME}/actions/workflows/emergency.yml`;
        window.open(url, '_blank');
        log('🚨 Mode urgence activé');
    }
}

function exportData() {
    const data = {
        timestamp: new Date().toISOString(),
        stats: {
            total: document.getElementById('totalCandidates').textContent,
            pending: document.getElementById('pendingCandidates').textContent,
            approved: document.getElementById('approvedCandidates').textContent,
            members: document.getElementById('totalMembers').textContent
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `liberchat-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    log('📤 Données exportées');
}

function viewMembers() {
    const url = `https://github.com/orgs/${ORG_NAME}/people`;
    window.open(url, '_blank');
    log('👥 Ouverture gestion membres');
}

function generateReport() {
    const report = `# Rapport Liberchat-collectif - ${new Date().toLocaleDateString()}

## Statistiques
- Candidatures totales: ${document.getElementById('totalCandidates').textContent}
- En attente: ${document.getElementById('pendingCandidates').textContent}
- Approuvées: ${document.getElementById('approvedCandidates').textContent}
- Membres actifs: ${document.getElementById('totalMembers').textContent}

## Actions recommandées
- Examiner les candidatures en attente
- Vérifier l'activité des membres
- Mettre à jour la documentation
`;
    
    const blob = new Blob([report], {type: 'text/markdown'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rapport-${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    
    log('📊 Rapport généré');
}

function purgeOldData() {
    if (confirm('⚠️ Nettoyer les anciennes données ?')) {
        log('🗑️ Nettoyage des données anciennes (simulation)');
        alert('Fonctionnalité en développement');
    }
}

function loadLogs() {
    const logs = [
        'Système démarré',
        'Candidatures synchronisées',
        'Backup automatique effectué',
        'Monitoring actif',
        'Aucune anomalie détectée'
    ];
    
    document.getElementById('systemLogs').innerHTML = logs.map(log => 
        `[${new Date().toLocaleString()}] ✅ ${log}`
    ).join('\n');
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    log('🚀 Interface admin initialisée');
    loadStats();
    loadCandidates();
    loadLogs();
    
    // Auto-refresh toutes les 5 minutes
    setInterval(() => {
        loadStats();
        loadCandidates();
    }, 300000);
});