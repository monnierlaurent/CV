createModalMain = () => {
    const divContainerFooter = document.getElementById('div--blur');

    const formation = document.getElementById('formation');


    formation.addEventListener('click', () => {

        divContainerFooter.setAttribute('class', 'body--blur');

        modals('fas fa-info', './index.html', 'Cette rubrique n\'inclus pas les formations militaire ni les compétences acquise en temps qu\'autodidacte', '');
    });


};

createModalMain();