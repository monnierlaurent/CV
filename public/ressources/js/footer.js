createModalFooter = () => {

    const divContainerFooter = document.getElementById('div--blur');

    const contact = document.getElementById('contact');
    const propos = document.getElementById('propos');

    const IconLoisir1 = document.getElementById('loisir__icon-1');
    const IconLoisir2 = document.getElementById('loisir__icon-2');
    const IconLoisir3 = document.getElementById('loisir__icon-3');


    contact.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur');

        modals('fas fa-phone-square-alt', './index.html', 'Vous voulez me contacter ?<br> <center>rien de plus simple</center>', '');
    });

    propos.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur');

        modals('fas fa-biohazard', './index.html', 'Aller je vous raconte un peu ma vie !!!', '');
    });

    IconLoisir1.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur');

        modals('fas fa-laptop-code', './index.html', '<center>Et oui !!!</center><br><center>développer n\'est pas que mon métier c\'est aussi ma passion.</center>', '');
    });

    IconLoisir2.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur');

        modals('fab fa-xbox', './index.html', '<center>Et oui !!!</center><br><center>j\'ai souvent besoin d\'un grand bolle d\'aire</center>', '');
    });

    IconLoisir3.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur');

        modals('fas fa-walking', './index.html', '<center>Et oui !!!</center><br><center>J\'ai souvent besoin d\'un grand bolle d\'aire.</center>', '');
    });

};

createModalFooter();