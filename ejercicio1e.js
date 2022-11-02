'use strict';

function createButton(numberOfButtons)
{
    for (let i = 1; i <= numberOfButtons; i++ ) {
        const button = document.createElement("button");
        button.innerText = i+' botón';
        button.id = 'button'+i;
        button.className = 'button';
        document.body.appendChild(button);
    }    
}

function animatedButton(numberOfButtons)
{
    for (let i = 1; i <= numberOfButtons; i++ ) {
        const textButton = document.getElementById('button'+i);

        textButton.onmouseenter = () => {
            textButton.innerHTML = i+' botóN';
        }
        
        textButton.onmouseleave = () => {
            textButton.innerHTML = i+' botón';
        }
    }
}

createButton(1000);
animatedButton(1000);