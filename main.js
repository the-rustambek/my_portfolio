const overlayElement = document.querySelector('#overlay');
const openButtonElement = document.querySelector('.bar-button ')
const closeButtonElement = document.querySelector('.close-button')


openButtonElement.addEventListener("click", event => {
     overlayElement.classList.add('nav-overlay')
     overlayElement.classList.remove('d-none')

})


closeButtonElement.addEventListener("click", event => {
    overlayElement.classList.remove('nav-overlay')
    overlayElement.classList.add('d-none')
})
