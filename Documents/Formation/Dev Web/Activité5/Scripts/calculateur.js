// Fonction pour calculer la mensualité
function calculerMensualite() {
    // Récupération des valeurs
    const montant = parseFloat(document.getElementById('montant').value);
    const tauxAnnuel = parseFloat(document.getElementById('taux').value);
    const dureeAnnees = parseInt(document.getElementById('duree').value);
    
    // Validation des données
    if (isNaN(montant) || montant <= 0) {
        alert('Veuillez entrer un montant de prêt valide et positif');
        return;
    }
    
    if (isNaN(tauxAnnuel) || tauxAnnuel <= 0) {
        alert('Veuillez entrer un taux d\'intérêt valide et positif');
        return;
    }
    
    if (isNaN(dureeAnnees) || dureeAnnees <= 0) {
        alert('Veuillez entrer une durée de prêt valide et positive');
        return;
    }
    
    // Calculs
    const tauxMensuel = (tauxAnnuel / 100) / 12; // Taux mensuel en décimal
    const nombreMensualites = dureeAnnees * 12;
    
    // Formule de calcul de la mensualité
    const mensualite = montant * (tauxMensuel * Math.pow(1 + tauxMensuel, nombreMensualites)) / 
                       (Math.pow(1 + tauxMensuel, nombreMensualites) - 1);
    
    // Affichage du résultat
    document.getElementById('mensualite').textContent = mensualite.toFixed(2);
}