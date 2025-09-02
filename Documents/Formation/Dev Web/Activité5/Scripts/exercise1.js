// Récupération des éléments du DOM
const inputChaine = document.getElementById('chaine');
const spanLongueur = document.getElementById('longueur');
const spanSousChaine = document.getElementById('sous-chaine');

// Écouteur d'événement pour détecter les changements dans l'input
inputChaine.addEventListener('input', function() {
    const texte = inputChaine.value;
    
    // Calcul de la longueur
    spanLongueur.textContent = texte.length;
    
    // Extraction des 3 premiers caractères
    if (texte.length >= 3) {
        spanSousChaine.textContent = texte.substring(0, 3);
    } else {
        spanSousChaine.textContent = texte.length > 0 ? texte : '-';
    }
});