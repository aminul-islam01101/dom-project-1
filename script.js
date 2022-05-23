// /* eslint-disable indent */

function generateColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function main() {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const bgColor = generateColor();
        const bodyColor = document.querySelector('body');
        bodyColor.style.backgroundColor = bgColor;
    });
}

window.onload = () => {
    main();
};
