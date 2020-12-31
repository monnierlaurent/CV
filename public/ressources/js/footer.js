createModalFooter = () => {

    const divContainerFooter = document.getElementById('div--blur');

    const contact = document.getElementById('contact');


    const IconLoisir1 = document.getElementById('loisir__icon-1');
    const IconLoisir2 = document.getElementById('loisir__icon-2');
    const IconLoisir3 = document.getElementById('loisir__icon-3');

    contact.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur_1');

        const parag1 = 'Vous voulez me contacter ?<br> <center>rien de plus simple</center>';
        const tel = 'par téléphone au : <br><center> 06 63 98 03 44';
        const email = '<center>Par email :<br>laurent.monnier51@orange.fr';

        modalsContact('fas fa-phone-square-alt', parag1, tel, email);

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainerFooter.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

    IconLoisir1.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur_1');

        const parag1 = '<center>Développer n\'est pas que mon métier c\'est aussi ma passion.</center>';
        const parag2 = '<center>Quand je ne conçois pas des sites web je travaille sur Unreal Engine 4 a la création de mini jeu.</center>';

        modalsLoisir('fas fa-laptop-code', parag1, parag2);

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainerFooter.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

    IconLoisir2.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur_1');

        const parag1 = '<center>Le jeu me permet de changer d\'univers</center>';
        const parag2 = '<center>Etant un grand fan de survial horror, je ma plonge dans la franchise Résident Evil pour changer de monde.</center>';

        modalsLoisir('fab fa-xbox', parag1, parag2);

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainerFooter.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

    IconLoisir3.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur_1');

        const parag1 = '<center>J\'ai souvent besoin d\'un grand bol d\'aire.</center>';
        const parag2 = '<center>J\'aime la marche dynamique qui ma détend et me permet de garder la forme pour être performant.</center>';

        modalsLoisir('fas fa-walking', parag1, parag2);

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainerFooter.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });

};

createModalFooter();