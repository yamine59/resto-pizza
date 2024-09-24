// Date cible pour le compte à rebours
var countDownDate = new Date("July 25, 2024 00:00:00").getTime();

// Mise à jour du compte à rebours toutes les secondes
var x = setInterval(function() {

    // Date et heure actuelles
    var now = new Date().getTime();

    // Calcul du temps restant
    var distance = countDownDate - now;

    // Calcul des jours, heures, minutes et secondes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Affichage du résultat
    document.getElementById("countdown").innerHTML = days + " j  " + hours + " H  "
    + minutes + " M  " + seconds + " S  ";

    // Si le compte à rebours est terminé, afficher un message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);