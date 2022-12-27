// Detecter le type d'appareil

var device = {
    isMobile: function () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
};

// Si l'appareil est un mobile, on ajoute le texte "mobile" dans l'id "device" du HTML.
if (device.isMobile()) {
    document.getElementById("device").innerHTML = "smartphone";
}
else {
    document.getElementById("device").innerHTML = "desktop_windows";
}