/* eslint-disable no-alert */
// /* eslint-disable indent */
let div = null;

function generateColor() {
    const red = Math.floor(Math.random() * 256)
        .toString(16)
        .toUpperCase();
    const green = Math.floor(Math.random() * 256)
        .toString(16)
        .toUpperCase();
    const blue = Math.floor(Math.random() * 256)
        .toString(16)
        .toUpperCase();
    return `#${red}${green}${blue}`;
}

function generateToastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    document.body.appendChild(div);
    div.className = 'toast-message toast-message-slide-in';
    div.addEventListener('click', () => {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');
        div.addEventListener('animationend', () => {
            div.remove();
            div = null;
        });
    });
}
/**
 * @param {string} color
 */
function isValidHex(color) {
    if (color.length < 3 || color.length > 8) {
        return false;
    }

    return /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(color);
}

function main() {
    const button = document.querySelector('button[type="button"]');
    const input = document.querySelector('#hex__input');
    const bodyColor = document.querySelector('body');
    const copyButton = document.querySelector('#copy-button');
    button.addEventListener('click', () => {
        const bgColor = generateColor();

        bodyColor.style.backgroundColor = bgColor;
        input.value = bgColor.substring(1);
    });
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(`#${input.value}`);
        if (div !== null) {
            div.remove();
        }
        if (isValidHex(input.value)) {
            generateToastMessage(`#${input.value} copied`);
        } else {
            alert('Invalid color code');
        }
    });
    input.addEventListener('keyup', (event) => {
        const color = event.target.value;
        if (color) {
            input.value = color.toUpperCase();
        }
        if (color && isValidHex) {
            bodyColor.style.backgroundColor = `#${color}`;
        }
    });
}
window.onload = () => {
    main();
};
