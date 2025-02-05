const messages = [
    "Estas segura?",
    "Muy muy segura??",
    "Estefany Alejadnra?",
    "Por favor amor...",
    "Solo piensalo sip!",
    "Si dices que no, estaré muy triste...",
    "De verdad me quieres ver así :c...",
    "Pero amooooooooooooooor...",
    "Esta bien, dejaré de preguntar...",
    "Mentiris, dí que si amor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
