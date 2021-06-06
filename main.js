const overlayElement = document.querySelector('#overlay');
const openButtonElement = document.querySelector('.bar-button ')
const closeButtonElement = document.querySelector('.close-button')

const navbarTitleElement= document.querySelector(".navbar-title")
const navbarToggleElement=document.querySelector(".bar-button")
const avatarImgElement=document.querySelector(".wrapper-avatar")
const wrapperElement=document.querySelector(".wrapper")
const wrapperInfoElement=document.querySelector(".wrapper-info")

openButtonElement.addEventListener("click", event => {
     overlayElement.classList.add('nav-overlay')
     overlayElement.classList.remove('d-none')
     avatarImgElement.classList.add("d-none")
     navbarToggleElement.classList.add("d-none")
     navbarTitleElement.classList.add("d-none")
     wrapperElement.style.backgroundImage="none"
     
     wrapperInfoElement.classList.add("d-none")

})


closeButtonElement.addEventListener("click", event => {
    overlayElement.classList.remove('nav-overlay')
    overlayElement.classList.add('d-none')
    avatarImgElement.classList.remove("d-none")
    
    navbarToggleElement.classList.remove("d-none")
    navbarTitleElement.classList.remove("d-none")
    
    
    wrapperInfoElement.classList.remove("d-none")
})
