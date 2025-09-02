// Tableau initial
let monTableau = [5, 2, 8, 1, 9];

// Fonction pour afficher le tableau
function afficherTableau() {
    document.getElementById('tableau').textContent = JSON.stringify(monTableau);
}

// Fonction pour ajouter un élément
function ajouterElement() {
    const nouvelElement = parseInt(document.getElementById('nouvel-element').value);
    
    if (isNaN(nouvelElement)) {
        alert('Veuillez entrer un nombre valide');
        return;
    }
    
    monTableau.push(nouvelElement);
    afficherTableau();
}

// Fonction pour supprimer un élément
function supprimerElement() {
    const index = parseInt(document.getElementById('index-suppression').value);
    
    if (isNaN(index) || index < 0 || index >= monTableau.length) {
        alert('Index invalide');
        return;
    }
    
    monTableau.splice(index, 1);
    afficherTableau();
}

// Fonction pour trier le tableau
function trierTableau() {
    monTableau.sort((a, b) => a - b);
    afficherTableau();
}

// Affichage initial du tableau
afficherTableau();