createModalHeader = () => {

    const divContainer = document.getElementById('div--blur');

    const icon1 = document.getElementById('icon_1');
    const icon2 = document.getElementById('icon_2');
    const icon3 = document.getElementById('icon_3');
    const icon4 = document.getElementById('icon_4');
    const icon5 = document.getElementById('icon_5');

    icon1.addEventListener('click', () => {

        divContainer.setAttribute('class', 'body--blur_1');

        const parag1 = 'Le HTML5 est utilisé pour concevoir les sites Internet. Celui-ci se résume à un langage de balisage qui sert à l\'écriture de l\'hypertexte indispensable à la mise en forme d\'une page Web.';

        modals('fab fa-html5', '', parag1, '');

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainer.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

    icon2.addEventListener('click', () => {

        divContainer.setAttribute('class', 'body--blur_1');

        const parag2 = 'JavaScript est un langage de programmation qui permet d’implémenter des mécanismes complexes sur une page web. À chaque fois qu’une page web fait plus que simplement afficher du contenu statique — afficher du contenu mis à jour à des temps déterminés, des cartes interactives, des animations 2D/3D, des menus vidéo défilants.';

        modals('fab fa-js-square', parag2, '');

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainer.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

    icon3.addEventListener('click', () => {

        divContainer.setAttribute('class', 'body--blur_1');

        const parag3 = 'Vue est un framework évolutif pour construire des interfaces utilisateur.À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale.  ';

        modals('fab fa-vuejs', parag3, '');

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainer.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

    icon4.addEventListener('click', () => {

        divContainer.setAttribute('class', 'body--blur_1');

        const parag4 = 'Node.js sert à faire du Javascript coté serveur, et peut être utilisé dans des applications de bases de données, la plus populaire étant MySQL. Ce n’est ni un framework ni un serveur. Node.js est souvent confondu avec ce dernier.';

        modals('fab fa-node', parag4, '');

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainer.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

    icon5.addEventListener('click', () => {

        divContainer.setAttribute('class', 'body--blur_1');

        const parag5 = 'CSS est l’acronyme de Cascading Style Sheets » ce qui signifie « feuille de style en cascade. Le CSS correspond à un langage informatique permettant de mettre en forme des pages web HTML ou XML.';

        modals('fab fa-css3-alt', parag5, '');

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainer.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });
};

createModalHeader();