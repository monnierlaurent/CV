createModalFooter = () => {

    const divContainerFooter = document.getElementById('div--blur');

    const contact = document.getElementById('contact');


    const IconLoisir1 = document.getElementById('loisir__icon-1');
    const IconLoisir2 = document.getElementById('loisir__icon-2');
    const IconLoisir3 = document.getElementById('loisir__icon-3');

    contact.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur_1');

        const parag1 = 'Vous voulez me contacter ?<br> <center>rien de plus simple</center>';

        modals('fas fa-phone-square-alt', '', parag1, '');

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

        const parag2 = '<center>Et oui !!!</center><br><center>développer n\'est pas que mon métier c\'est aussi ma passion.</center>';

        modals('fas fa-laptop-code', '', parag2, '');

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

        const parag3 = '<center>Le jeu me permet de changer d\'univer</center>';

        modals('fab fa-xbox', '', parag3, '');

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

        const parag4 = '<center>Et oui !!!</center><br><center>J\'ai souvent besoin d\'un grand bolle d\'aire.</center>';

        modals('fas fa-walking', '', parag4, '');

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