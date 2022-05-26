// /* eslint-disable indent */
let div = null;

function generateColor() {
    const red = Math.floor(Math.random() * 256).toString(16);
    const green = Math.floor(Math.random() * 256).toString(16);
    const blue = Math.floor(Math.random() * 256).toString(16);
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
function main() {
    const button = document.querySelector('button[type="button"]');
    const output = document.querySelector('#hex-code');
    const copyButton = document.querySelector('#copy-button');
    button.addEventListener('click', () => {
        const bgColor = generateColor();
        const bodyColor = document.querySelector('body');
        bodyColor.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(output.value);
        if (div !== null) {
            div.remove();
        }
        generateToastMessage(`${output.value} copied`);
    });
}

window.onload = () => {
    main();
};
