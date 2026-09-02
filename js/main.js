const botaoTema = document.querySelector('#botao-tema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
});