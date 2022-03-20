const btn = document.querySelector('header > button')
const side = document.querySelector('aside')
const logo = document.querySelector('header > img')
const photho = document.querySelector('div > img:first-child')
const names = document.querySelector('div > div')

function toggle(){
    side.classList.toggle('expand')
    logo.toggleAttribute('hidden')
    photho.toggleAttribute('hidden')
    names.toggleAttribute('hidden')
}

btn.addEventListener('click', toggle)