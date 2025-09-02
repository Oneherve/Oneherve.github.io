// Fonction pour analyser une date
function analyserDate() {
    const dateInput = document.getElementById('date').value;
    const parties = dateInput.split('-');
    
    if (parties.length !== 3) {
        alert('Format de date invalide. Utilisez JJ-MM-AAAA');
        return;
    }
    
    const jour = parseInt(parties[0]);
    const mois = parseInt(parties[1]) - 1; // Les mois commencent à 0 en JavaScript
    const annee = parseInt(parties[2]);
    
    const dateSaisie = new Date(annee, mois, jour);
    
    // Vérification de la validité de la date
    if (isNaN(dateSaisie.getTime())) {
        alert('Date invalide');
        return;
    }
    
    // Affichage des composants de la date
    document.getElementById('jour').textContent = dateSaisie.getDate();
    document.getElementById('mois').textContent = dateSaisie.getMonth() + 1; // Ajustement pour mois 1-12
    document.getElementById('annee').textContent = dateSaisie.getFullYear();
    
    // Calcul de la différence avec la date actuelle
    const aujourdHui = new Date();
    const differenceMs = Math.abs(aujourdHui - dateSaisie);
    const differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    
    document.getElementById('difference').textContent = differenceJours;
}