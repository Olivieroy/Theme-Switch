// Récupérer le niveau de batterie de l'appareil et l'afficher en pourcentage
navigator.getBattery().then(function (battery) {

    // Si la batterie est inférieure à 100%, change le texte de id battery_icon en "battery_full"
    if (battery.level * 100 == 100) {
        document.getElementById("battery_icon").innerHTML = "battery_full";
        // Ajouter la class "green" à l'élément HTML avec l'ID "batterie"
        document.getElementById("battery_icon").classList.add("green");
    }

        // Si la batterie est inférieure à 90%, change le texte de id battery_icon en "battery_5_bar"
        if (battery.level * 100 <= 90) {
            document.getElementById("battery_icon").innerHTML = "battery_5_bar";
            document.getElementById("battery_icon").classList.add("green");
        }
    
        // Si la batterie est inférieure à 70%, change le texte de id battery_icon en "battery_4_bar"
        if (battery.level * 100 <= 70) {
            document.getElementById("battery_icon").innerHTML = "battery_4_bar";
            document.getElementById("battery_icon").classList.add("greenyellow");
        }
    
        // Si la batterie est inférieure à 50%, change le texte de id battery_icon en "battery_3_bar"
    if (battery.level * 100 <= 50) {
        document.getElementById("battery_icon").innerHTML = "battery_3_bar";
        document.getElementById("battery_icon").classList.add("yellow");
        
    }

    // Si la batterie est inférieure à 30%, change le texte de id battery_icon en "battery_2_bar"
    if (battery.level * 100 <= 30) {
        document.getElementById("battery_icon").innerHTML = "battery_2_bar";
        document.getElementById("battery_icon").classList.add("orange");
    }

    // Si la batterie est inférieure à 15%, change le texte de id battery_icon en "battery_1_bar"
    if (battery.level * 100 <= 15) {
        document.getElementById("battery_icon").innerHTML = "battery_1_bar";
        document.getElementById("battery_icon").classList.add("red");
    }
});

