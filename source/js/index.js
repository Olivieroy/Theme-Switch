// Afficher l'heure actuelle
var date = new Date();
var heure = date.getHours();
var minute = date.getMinutes();

// Si l'heure est inférieure à 10, ajouter un 0 devant
if (heure < 10) {
    heure = "0" + heure;
}

// Si la minute est inférieure à 10, ajouter un 0 devant
if (minute < 10) {
    minute = "0" + minute;
}

// Afficher l'heure dans l'élément HTML avec l'ID "heure"
document.getElementById("heure").innerHTML = heure + ":" + minute;