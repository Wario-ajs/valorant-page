const openBotao = document.querySelector('.navbar__botao');
const navLista = document.querySelector('.navbar__lista');

openBotao.addEventListener('click', () => {
    navLista.classList.toggle('navbar__lista--actv')
})

const navTitulo = document.querySelector('.navbar__titulo');

navTitulo.addEventListener('click', () => {
    navLista.classList.toggle('navbar__lista--actv')
})

const openBotao2 = document.querySelector('.navbar__botao2');

openBotao2.addEventListener('click', () => {
    navLista.classList.toggle('navbar__lista--actv')
})

openBotao.addEventListener('click', () => {
    openBotao2.classList.toggle('aberto')
})

openBotao.addEventListener('click', () => {
    openBotao.classList.toggle('fechado')
})

openBotao2.addEventListener('click', () => {
    openBotao2.classList.remove('aberto')
})

openBotao2.addEventListener('click', () => {
    openBotao.classList.remove('fechado')
})

/*-------Abrir no botão Agentes-------*/

navTitulo.addEventListener('click', () => {
    openBotao2.classList.toggle('aberto')
})

navTitulo.addEventListener('click', () => {
    openBotao.classList.toggle('fechado')
})