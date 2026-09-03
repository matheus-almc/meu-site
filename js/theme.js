const botaoTema = document.querySelector('#botao-tema')

export function iniciarTema() {
    botaoTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-claro')
        console.log('Tema alterado')
    })
}