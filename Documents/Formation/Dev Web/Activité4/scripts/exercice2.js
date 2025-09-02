// Afficher les nombres de 1 à 10 avec une boucle for
function showNumbers() {
    let result = "<p>Nombres de 1 à 10 :</p><p>";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    result += "</p>";
    document.getElementById("result").innerHTML = result;
}

// Calculer la somme de 1 à 100 avec une boucle while
function calculateSum() {
    let sum = 0;
    let i = 1;
    
    while (i <= 100) {
        sum += i;
        i++;
    }
    
    document.getElementById("result").innerHTML = `<p>La somme des entiers de 1 à 100 est : ${sum}</p>`;
}

// Jeu de devinette avec une boucle do-while
function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;
    
    do {
        guess = parseInt(prompt("Devinez le nombre secret (entre 1 et 100) :"));
        attempts++;
        
        if (isNaN(guess)) {
            alert("Veuillez entrer un nombre valide.");
        } else if (guess < secretNumber) {
            alert("Le nombre secret est plus grand.");
        } else if (guess > secretNumber) {
            alert("Le nombre secret est plus petit.");
        }
    } while (guess !== secretNumber);
    
    document.getElementById("result").innerHTML = 
        `<p>Félicitations! Vous avez trouvé le nombre secret ${secretNumber} en ${attempts} tentatives.</p>`;
}

// Générer la suite de Fibonacci
function generateFibonacci() {
    const n = parseInt(prompt("Combien de termes de la suite Fibonacci voulez-vous afficher ?"));
    
    if (isNaN(n) || n <= 0) {
        document.getElementById("result").innerHTML = "<p>Veuillez entrer un nombre positif.</p>";
        return;
    }
    
    let fibonacci = [0, 1];
    let result = `<p>Les ${n} premiers termes de la suite Fibonacci :</p><p>`;
    
    if (n === 1) {
        result += "0";
    } else if (n >= 2) {
        result += "0 1 ";
        
        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            result += fibonacci[i] + " ";
        }
    }
    
    result += "</p>";
    document.getElementById("result").innerHTML = result;
}