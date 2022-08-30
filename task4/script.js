const myLink = document.querySelector('#myLink');
myLink.addEventListener('click', (event) => {
    myLink.textContent = prompt();
    event.preventDefault();
});