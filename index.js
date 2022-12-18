const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nLinks = document.getElementsByClassName('nlinks')[0]

toggleButton.addEventListener('click', () => {
    nLinks.classList.toggle('active')
})

function myFunction(x) {
    x.classList.toggle("change");
}