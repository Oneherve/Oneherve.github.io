// Afficher les nombres premiers entre 1 et 100
function showPrimes() {
    let primes = [];
    
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(num);
        }
    }
    
    document.getElementById("result").innerHTML = 
        `<p>Nombres premiers entre 1 et 100 :</p><p>${primes.join(", ")}</p>`;
}

// Trouver les facteurs d'un nombre
function findFactors() {
    const number = parseInt(prompt("Entrez un nombre pour trouver ses facteurs :"));
    
    if (isNaN(number) || number <= 0) {
        document.getElementById("result").innerHTML = "<p>Veuillez entrer un nombre positif.</p>";
        return;
    }
    
    let factors = [];
    
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    
    document.getElementById("result").innerHTML = 
        `<p>Les facteurs de ${number} sont :</p><p>${factors.join(", ")}</p>`;
}

// Calculer la moyenne des nombres positifs
function calculateAverage() {
    let numbers = [];
    let input;
    
    do {
        input = prompt("Entrez un nombre positif (ou un nombre négatif pour arrêter) :");
        
        if (input === null) break; // Si l'utilisateur annule
        
        const num = parseFloat(input);
        
        if (!isNaN(num)) {
            if (num >= 0) {
                numbers.push(num);
            } else {
                break; // Sortir de la boucle si nombre négatif
            }
        }
    } while (true);
    
    if (numbers.length === 0) {
        document.getElementById("result").innerHTML = "<p>Aucun nombre positif saisi.</p>";
        return;
    }
    
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const average = sum / numbers.length;
    
    document.getElementById("result").innerHTML = 
        `<p>Nombres saisis : ${numbers.join(", ")}</p>
         <p>La moyenne est : ${average.toFixed(2)}</p>`;
}

// Dessiner un motif triangulaire
function drawPattern() {
    const height = parseInt(prompt("Entrez la hauteur du triangle :"));
    
    if (isNaN(height) || height <= 0) {
        document.getElementById("result").innerHTML = "<p>Veuillez entrer une hauteur valide.</p>";
        return;
    }
    
    let pattern = "<pre>";
    
    for (let i = 1; i <= height; i++) {
        // Ajouter des espaces pour centrer le triangle
        for (let j = height - i; j > 0; j--) {
            pattern += " ";
        }
        
        // Ajouter les étoiles
        for (let k = 1; k <= (2 * i - 1); k++) {
            pattern += "*";
        }
        
        pattern += "\n";
    }
    
    pattern += "</pre>";
    document.getElementById("result").innerHTML = pattern;
}