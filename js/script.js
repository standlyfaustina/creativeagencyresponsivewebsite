const toggleMenu = document.querySelector('.toggle')

const navigation = document.querySelector('.navigation')

toggleMenu.addEventListener('click',()=>{
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
})