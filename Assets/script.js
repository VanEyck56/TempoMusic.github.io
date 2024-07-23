document.addEventListener("DOMContentLoaded", function() {
    function adjustBackgroundSize() {
        const sections = document.querySelectorAll('section');
        const isPortrait = window.innerHeight > window.innerWidth;

        sections.forEach(section => {
            const bgImage = section.querySelector('.background-image');

            if (isPortrait) {
                // En mode portrait, ajuster l'image à la taille de l'écran sans bandes blanches
                bgImage.style.backgroundSize = 'contain';
                bgImage.style.backgroundAttachment = 'scroll'; // Pas fixe pour éviter les bandes blanches
                bgImage.style.backgroundPosition = 'center center';
            } else {
                // En mode paysage, l'image couvre l'écran
                bgImage.style.backgroundSize = 'cover';
                bgImage.style.backgroundAttachment = 'fixed';
                bgImage.style.backgroundPosition = 'center center';
            }
        });
    }

    // Ajuster lors du chargement de la page
    adjustBackgroundSize();

    // Ajuster lors du redimensionnement de la fenêtre
    window.addEventListener('resize', adjustBackgroundSize);
});