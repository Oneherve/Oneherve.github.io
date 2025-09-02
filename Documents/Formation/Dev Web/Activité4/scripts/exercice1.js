// Fonction pour vérifier l'âge
function checkAge() {
    let age = prompt("Quel est votre âge ?");
    let resultElement = document.getElementById("result");
    
    if (age === null) return; // Si l'utilisateur annule
    
    age = parseInt(age);
    
    if (isNaN(age)) {
        resultElement.innerHTML = "<p>Veuillez entrer un nombre valide.</p>";
    } else if (age < 18) {
        resultElement.innerHTML = "<p>Vous êtes mineur.</p>";
    } else {
        resultElement.innerHTML = "<p>Vous êtes majeur.</p>";
    }
}

// Fonction pour vérifier si un nombre est pair ou impair
function checkEvenOdd() {
    let number = prompt("Entrez un nombre :");
    let resultElement = document.getElementById("result");
    
    if (number === null) return;
    
    number = parseInt(number);
    
    if (isNaN(number)) {
        resultElement.innerHTML = "<p>Veuillez entrer un nombre valide.</p>";
    } else if (number % 2 === 0) {
        resultElement.innerHTML = `<p>${number} est un nombre pair.</p>`;
    } else {
        resultElement.innerHTML = `<p>${number} est un nombre impair.</p>`;
    }
}

// Fonction pour afficher le nom du mois
function showMonthName() {
    let monthNumber = prompt("Entrez le numéro du mois (1-12) :");
    let resultElement = document.getElementById("result");
    
    if (monthNumber === null) return;
    
    monthNumber = parseInt(monthNumber);
    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        resultElement.innerHTML = "<p>Veuillez entrer un nombre entre 1 et 12.</p>";
    } else {
        resultElement.innerHTML = `<p>Le mois numéro ${monthNumber} est ${months[monthNumber - 1]}.</p>`;
    }
}