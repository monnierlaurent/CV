createElm1 = (balise, value, attribut, attributValue) => {
    const newElm1 = document.createElement(balise);
    newElm1.setAttribute(attribut, attributValue);
    newElm1.innerHTML = value;
    return newElm1;
};

createElm2 = (balise, value, attribut1, attributValue1, attribut2, attributValue2) => {
    const newElm2 = document.createElement(balise);
    newElm2.setAttribute(attribut1, attributValue1);
    newElm2.setAttribute(attribut2, attributValue2);
    newElm2.innerHTML = value;
    return newElm2;
};
createElm3 = (balise, value, attribut1, attributValue1, attribut2, attributValue2, attribut3, attributValue3) => {
    const newElm3 = document.createElement(balise);
    newElm3.setAttribute(attribut1, attributValue1);
    newElm3.setAttribute(attribut2, attributValue2);
    newElm3.setAttribute(attribut3, attributValue3);
    newElm3.innerHTML = value;
    return newElm3;
};
createElm4 = (balise, value, attribut1, attributValue1, attribut2, attributValue2, attribut3, attributValue3, attribut4, attributValue4) => {
    const newElm4 = document.createElement(balise);
    newElm4.setAttribute(attribut1, attributValue1);
    newElm4.setAttribute(attribut2, attributValue2);
    newElm4.setAttribute(attribut3, attributValue3);
    newElm4.setAttribute(attribut4, attributValue4);
    newElm4.innerHTML = value;
    return newElm4;
};

modals = (classIcons, contenu1, contenu2) => {
    const main = document.querySelector('body');
    const newAside = main.appendChild(createElm2('aside', '', 'id', 'modal1', 'class', 'modal animation_1')); //
    const newDivAside = newAside.appendChild(createElm2('div', '', 'id', 'div_modal', 'class', 'modal-wrapper')); //
    newDivAside.appendChild(createElm2('i', '', 'id', 'icon1', 'class', 'far fa-times-circle fa-2x hover_2')); //
    newDivAside.appendChild(createElm1('h2', '', 'id', 'heading', 'class', '')); //

    const h2 = document.getElementById('heading');
    h2.appendChild(createElm2('i', '', 'id', 'icon_2', 'class', classIcons + ' ' + 'fa-4x aside__fa--color')); //

    newDivAside.appendChild(createElm1('p', contenu1)); //
    newDivAside.appendChild(createElm1('p', contenu2)); //
};