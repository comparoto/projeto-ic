document.getElementById('generate').addEventListener('submit', function (event) {
    event.preventDefault();

    const description = document.getElementById('description');
    const generateBtn = document.getElementById('generate-img');
    const mensagem = document.getElementById('mensagem');

    if (description.value.trim() === '') {
        mensagem.textContent = 'Por favor, descreva a imagem que deseja gerar';
        mensagem.style.color = '#000000';
        return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = 'Gerando...';


    setTimeout(() => {

        mensagem.textContent = 'Imagem gerada com sucesso!';
        mensagem.className = 'success-message';


        description.value = '';

        generateBtn.disabled = false;
        generateBtn.textContent = 'Gerar Imagem';

    }, 1500);
});
