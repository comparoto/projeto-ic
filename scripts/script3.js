document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.card button');

    botoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const paragrafo = this.parentElement.querySelector('p');
            const descricaoCompleta = this.getAttribute('description-button');
            const descricaoOriginal = paragrafo.getAttribute('original-p');

            if (paragrafo.textContent === descricaoCompleta) {

                paragrafo.textContent = descricaoOriginal;
                this.textContent = 'Ver Descrição';
            } else {

                paragrafo.textContent = descricaoCompleta;
                this.textContent = 'Ocultar Descrição';
            }
        });
    });
});