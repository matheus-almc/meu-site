const botaoTema = document.querySelector('#botao-tema')

export function iniciarTema() {

    botaoTema.addEventListener('change', () => {

        document.body.classList.toggle(
            'tema-claro',
            botaoTema.checked
        )

    })
}