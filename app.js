// grab DOM elements

// set event listeners

// eslint-disable-next-line no-console
console.log('Hello World');
const nameEl = document.getElementById('name');

nameEl.textContent = 'Jung';

const updateButton = document.getElementById('update');
updateButton.addEventListener('click', () => {
    console.log('I am clicking the button');
    const nameInput = document.getElementById("input");
    nameEl.textContent = nameInput.value;
});
