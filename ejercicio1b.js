'use strict';

const button1 = document.createElement("button");
button1.innerText = '1 botón';
button1.id = 'button1';

document.body.appendChild(button1);

const textButton = document.getElementById('button1');

textButton.onmouseenter = () => {
    textButton.innerHTML = '1 botóN';
}

textButton.onmouseleave = () => {
    textButton.innerHTML = '1 botón';
}

