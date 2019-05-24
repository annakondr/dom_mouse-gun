'use strict';
const body = document.querySelector('body');
body.addEventListener('click', killElement);
function killElement(event) {
    event.preventDefault();
    const killedElement = document.elementFromPoint(event.clientX, event.clientY);
    killedElement.remove()
}
