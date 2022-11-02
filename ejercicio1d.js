'use strict';

function createButton(numberOfButtons)
{
    for (let i = 1; i <= numberOfButtons; i++ ) {
        const button = document.createElement("button");
        button.innerText = i+' botón';
        button.id = 'button'+i;
        document.body.appendChild(button);
    }    
}

createButton(1000);