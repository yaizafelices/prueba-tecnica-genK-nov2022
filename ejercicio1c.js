'use strict';

function createButton()
{
    for (let i = 1; i <= 10; i++ ) {
        const button = document.createElement("button");
        button.innerText = i+' botón';
        button.id = 'button'+i;
        button.className = 'button';
        document.body.appendChild(button);
    }    
}

createButton();