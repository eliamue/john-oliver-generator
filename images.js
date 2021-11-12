const oliver = document.querySelector('#johnoliver');

function getRandomImage() {
    const pics = ['1', '2', '3', '4', '5'];
    const images = Math.floor(Math.random() * 5);
    const randompic = pics[images];

    return randompic;
}

export function renderImage() {
    let joliver = getRandomImage();
    oliver.src = `./assets/${joliver}.png`;
}
