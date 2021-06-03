


// const menuToggleElement= document.querySelector(".menu-toggle")
// const


// menuToggleElement.addEventListener("click",event =>{
//     menuToggleElement.show()
// })


const overlayElement = document.querySelector('#overlay');
const openButtonElement = document.querySelector('.bar-button ')
const closeButtonElement = document.querySelector('.close-button')


openButtonElement.addEventListener("click", event => {
     overlayElement.classList.remove('d-none')
})

closeButtonElement.addEventListener("click", event => {
    overlayElement.classList.add('d-none')
})