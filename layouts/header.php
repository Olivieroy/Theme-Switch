<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link CSS -->
    <link rel="stylesheet" href="source/css/master.css">
    <!-- End link CSS  -->

    <!-- Link Font et Material Icons -->
    <link href="https://fonts.googleapis.com/css?family=Material+Icons%7CMaterial+Icons+Outlined%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Round%7CMaterial+Icons+Sharp" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
    <!-- End link Font et Material Icons -->

    <!-- Link Javascript -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
        <!-- Active JQuery ⬆️  -->
    <script src="source/js/index.js" defer></script>
    <script src="source/js/battery.js" defer></script>
    <script src="source/js/device.js" defer></script>
        <!-- If you want you can add other scripts -->
    <!-- End link Javascript -->
    <title>Switch</title>
</head>
<body>
    <header class="header">
        <div class="header__profile" tabindex="0">
        <img src="https://olivieroy.fr/assets/sticker.6a4a5db2.svg" alt="Olivier Roy" class="header__profile__avatar">
            <div class="header__profile__wave">
            </div>
        </div>

        <div class="header__more">
            <span class="header__more__hour" id="heure"></span>
            <span class="header__more__battery material-icons-round" id="battery_icon">battery_full</span>
        </div>

        
    </header>
    <main class="main">