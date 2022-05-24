// /* eslint-disable indent */

function generateColor() {
    const red = Math.floor(Math.random() * 256).toString(16);
    const green = Math.floor(Math.random() * 256).toString(16);
    const blue = Math.floor(Math.random() * 256).toString(16);
    return `#${red}${green}${blue}`;
}

function main() {
    const button = document.querySelector('button');
    const output = document.querySelector('#hex-code');
    button.addEventListener('click', () => {
        const bgColor = generateColor();
        const bodyColor = document.querySelector('body');
        bodyColor.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
}

window.onload = () => {
    main();
};
