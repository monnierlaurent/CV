createModalMain = () => {
    const divContainerMain = document.getElementById('div--blur');

    const formation = document.getElementById('formation');

    formation.addEventListener('click', () => {

        divContainerMain.setAttribute('class', 'body--blur_1');

        const parag1 = 'Cette rubrique n\'inclus pas les formations militaire ni les compétences acquises en temps qu\'autodidacte.';
        const parag2 = 'Les formations militaire que j\'ai suivis mon permis d\'apprendre a diriger une équipe , a gérer le stresse,';
        const parag3 = 'mais avant tout, sa a fait de moi un professionnel.';
        const parag4 = 'J\'ai appris la réparation informatique en tant qu\'autodidacte.';

        modalsFormation('fas fa-info', parag1, parag2, parag3, parag4);

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