/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */



function createCarousel(slidesCount = 5) {
    container = document.querySelector('#carousel');
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createStyle();
    createListener();
}

var headElement = document.head;
console.log(headElement);

function createSlides(n) {
    slidesContainer = document.createElement('ul');
    slidesContainer.setAttribute('class', 'slides');

    for (i = 0; i < n; i++) {
        var slideItem = document.createElement('li');
        var slideLink = document.createElement('a');

        slideItem.setAttribute(
            'class',
            i === 0 ? 'slides__item active' : 'slides__item'
        );
        slideLink.setAttribute('href', '#');
        slideItem.appendChild(slideLink);
        slidesContainer.appendChild(slideItem);
    }

    container.appendChild(slidesContainer);
}

function createControls() {
    controlsContainer = document.createElement('div');
    controlsContainer.setAttribute('class', 'controls');

    for (i = 0; i < 3; i++) {
        var controlItem = document.createElement('div');
        var controlIcon = document.createElement('i');
        var ItemClass = 'controls__item';
        var IconClass = 'fas';

        switch (i) {
            case 0:
                controlItem.setAttribute('class', `${ItemClass} controls__prev`);
                controlIcon.setAttribute('class', `${IconClass} fa-chevron-left`);
                break;
            case 1:
                controlItem.setAttribute('class', `${ItemClass} controls__next`);
                controlIcon.setAttribute('class', `${IconClass} fa-chevron-right`);
                break;
            case 2:
                controlItem.setAttribute('class', `${ItemClass} controls__pause`);
                controlIcon.setAttribute('class', `${IconClass} fa-play`);
                break;
        }
        controlItem.appendChild(controlIcon);
        controlsContainer.appendChild(controlItem);
    }
    container.appendChild(controlsContainer);
}

console.log(createControls);

function createIndicators(n) {
    indicatorsContainer = document.createElement('div');
    indicatorsContainer.setAttribute('class', 'indicators');

    for (i = 0; i < n; i++) {
        var indicatorsItem = document.createElement('span');

        indicatorsItem.setAttribute(
            'class',
            i === 0 ? 'indicators__item active' : 'indicators__item'
        );
        indicatorsItem.setAttribute('data-slide-to', i);
        indicatorsContainer.appendChild(indicatorsItem);
    }

    container.appendChild(indicatorsContainer);
}

function createContainer() {
    elem = document.createElement('div');

    elem.setAttribute('id', 'carousel');
    elem.setAttribute('class', 'carousel');
    document.querySelector('body').appendChild(elem);

    container = document.querySelector('#carousel');
}

function createStyle() {
    styleContainer = document.createElement('style');
    var styleCode = `
      .controls,
      .slides {
        position: relative;
      }
      .indicators {
        display: flex;
      }
      .indicators__item {
        display: block;

        background-color: blue;

        width: 50px;
        height: 50px;
        margin: 15px;
      }`;

    styleContainer.innerHTML = styleCode;
    container.appendChild(styleContainer);
}

function createListener() {
    var indicatorsContainer = document.querySelector('div.indicators');

    indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function createHandler(event) {
    var target = event.target;

    if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';

        if (prevIndicator !== null) prevIndicator.removeAttribute('style');

        prevIndicator = target;
    }
}


