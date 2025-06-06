
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contact');
    const mensagemStatus = document.getElementById('mensagem-status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('name');
        const email = document.getElementById('email');
        const telefone = document.getElementById('phone-number');
        const assunto = document.getElementById('subject');
        const mensagem = document.getElementById('text');

        if (
            nome.value.trim() === '' ||
            email.value.trim() === '' ||
            telefone.value.trim() === '' ||
            assunto.value === '' ||
            mensagem.value.trim() === ''
        ) {
            mensagemStatus.textContent = 'Por favor, preencha todos os campos.';
            mensagemStatus.style.color = '#721c24';
            return;
        }


        mensagemStatus.textContent = 'Formulário enviado com sucesso!';
        mensagemStatus.style.color = '#721c24';

        form.reset();
    });
});

