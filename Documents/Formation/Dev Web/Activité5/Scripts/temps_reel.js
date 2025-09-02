// Fonction pour mettre à jour l'horloge
function mettreAJourHorloge() {
    const maintenant = new Date();
    
    // Formatage de l'heure
    const heures = maintenant.getHours().toString().padStart(2, '0');
    const minutes = maintenant.getMinutes().toString().padStart(2, '0');
    const secondes = maintenant.getSeconds().toString().padStart(2, '0');
    
    // Affichage dans le format HH:MM:SS
    document.getElementById('horloge').value = `${heures}:${minutes}:${secondes}`;
    
    // Planification de la prochaine mise à jour
    setTimeout(mettreAJourHorloge, 1000);
}

// Démarrage de l'horloge
mettreAJourHorloge();