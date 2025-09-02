// Fonction pour calculer la racine carrée
function calculerRacine() {
    const nombre = parseFloat(document.getElementById('nombre').value);
    const resultat = isNaN(nombre) ? 'Veuillez entrer un nombre valide' : Math.sqrt(nombre);
    document.getElementById('racine').textContent = resultat;
}

// Fonction pour arrondir un nombre
function arrondirNombre() {
    const nombre = parseFloat(document.getElementById('nombre').value);
    const resultat = isNaN(nombre) ? 'Veuillez entrer un nombre valide' : Math.round(nombre);
    document.getElementById('arrondi').textContent = resultat;
}

// Fonction pour générer un nombre aléatoire entre 1 et 100
function genererAleatoire() {
    const aleatoire = Math.floor(Math.random() * 100) + 1;
    document.getElementById('aleatoire').textContent = aleatoire;
}

// Fonction améliorée pour générer un nombre aléatoire entre min et max
function genererAleatoireIntervalle() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Veuillez entrer des valeurs valides (min < max)');
        return;
    }
    
    const aleatoire = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('aleatoire-perso').textContent = aleatoire;
}