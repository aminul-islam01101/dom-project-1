// /* eslint-disable indent */

function generateColor() {
    const red = Math.floor(Math.random() * 256).toString(16);
    const green = Math.floor(Math.random() * 256).toString(16);
    const blue = Math.floor(Math.random() * 256).toString(16);
    return `#${red}${green}${blue}`;
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
    });
}

window.onload = () => {
    main();
};
