/* eslint-disable no-alert */
// /* eslint-disable indent */

let div = null;

// random decimal color function-1

function generateDecimalColor() {
    const red = Math.floor(Math.random() * 256);

    const green = Math.floor(Math.random() * 256);

    const blue = Math.floor(Math.random() * 256);

    return { red, green, blue };
}

// hexadecimal color function-2

function generateHexColor({ red, green, blue }) {
    const getTwoCode = (value) => {
        const hex = value.toString(16);

        return hex.length === 1 ? `0${hex}` : hex;
    };
    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}

// hexadecimal color function-3

function generateRGBColor({ red, green, blue }) {
    return `rgb(${red}, ${green}, ${blue})`;
}

// toast -message-slide-in function-4

function generateToastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    document.body.appendChild(div);
    div.className = 'toast-message toast-message-slide-in';

    // toast -message-slide- addEventListener

    div.addEventListener('click', () => {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        // copy Button animation addEventListener

        div.addEventListener('animationend', () => {
            div.remove();
            div = null;
        });
    });
}

// hex color validation function-5
/**
 * @param {string} color
 */
function isValidHex(color) {
    if (color.length < 3 || color.length > 8) {
        return false;
    }

    return /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(color);
}
// Main function

function main() {
    // variables declaration

    const button = document.querySelector('button[type="button"]');

    const input = document.querySelector('#hex__input');

    const rgbInput = document.querySelector('#rgb__input');

    const bodyColor = document.querySelector('body');

    const copyButton = document.querySelector('#copy-button');

    const rgbCopyButton = document.querySelector('#rgb-copy-button');

    // color change button event addEventListener-1

    button.addEventListener('click', () => {
        const color = generateDecimalColor();

        const hex = generateHexColor(color);

        const rgb = generateRGBColor(color);

        bodyColor.style.backgroundColor = hex;
        input.value = hex.substring(1);
        rgbInput.value = rgb;
    });

    // hex copyButton addEventListener-2

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

    // rgb color copyButton addEventListener-3
    rgbCopyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(rgbInput.value);
        if (div !== null) {
            div.remove();
        }
        generateToastMessage(`${rgbInput.value} copied`);
    });

    // dynamic hex color  input addEventListener-4

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
// Main function execution

window.onload = () => {
    main();
};
