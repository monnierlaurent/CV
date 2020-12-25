createModalMain = () => {
    const divContainerMain = document.getElementById('div--blur');

    const formation = document.getElementById('formation');

    formation.addEventListener('click', () => {

        divContainerMain.setAttribute('class', 'body--blur_1');

        const parag1 = 'Cette rubrique n\'inclus pas les formations militaire ni les compétences acquise en temps qu\'autodidacte';

        modals('fas fa-info', parag1, '');

        const modal = document.getElementById('modal1');
        const BtnHide = document.getElementById('icon1');

        BtnHide.addEventListener('click', (event) => {

            modal.setAttribute('class', 'modal animation_2');
            divContainerMain.setAttribute('class', 'body--blur_2');

            setTimeout(() => {
                const main = document.querySelector('body');
                main.removeChild(modal);
            }, 400);
        });
    });
}; // fin de createModalMain

createModalMain();