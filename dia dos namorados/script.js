// Espera todo o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Configurações Iniciais ---
    const senhaCorreta = "070723"; // A data especial de vocês! ❤️
    const urlDestino = "amor.html"; // Página que será aberta com a senha correta
    let senhaDigitada = "";

    // --- Seleciona os elementos do HTML ---
    const display = document.getElementById('displaySenha');
    const containerSenha = document.querySelector('.senha-input');
    const botoesNumericos = document.querySelectorAll('[data-numero]');
    const botaoApagar = document.getElementById('apagar');

    // Função para atualizar o display da senha com asteriscos
    const atualizarDisplay = () => {
        display.value = "*".repeat(senhaDigitada.length);
    };

    // Função para verificar a senha
    const verificarSenha = () => {
        if (senhaDigitada === senhaCorreta) {
            // Se a senha estiver correta, redireciona para a página de destino
            window.location.href = urlDestino;
        } else {
            // Se estiver incorreta, avisa o usuário e limpa o campo
            
            // Adiciona uma animação de "tremer" para indicar o erro
            containerSenha.classList.add('shake');
            
            alert("Senha incorreta! Tente novamente. 😉");
            senhaDigitada = "";
            atualizarDisplay();
            
            // Remove a animação após 500ms para que possa ser usada de novo
            setTimeout(() => {
                containerSenha.classList.remove('shake');
            }, 500);
        }
    };

    // --- Adiciona os Eventos aos Botões ---

    // Adiciona um 'escutador' de clique para cada botão com número ou ponto
    botoesNumericos.forEach(botao => {
        botao.addEventListener('click', () => {
            // Impede que a senha fique maior que 6 dígitos
            if (senhaDigitada.length < 6) {
                senhaDigitada += botao.dataset.numero;
                atualizarDisplay();

                // Se a senha atingiu 6 dígitos, verifica automaticamente
                if (senhaDigitada.length === 6) {
                    verificarSenha();
                }
            }
        });
    });

    // Adiciona a função de apagar ao botão de backspace
    botaoApagar.addEventListener('click', () => {
        // Remove o último caractere da senha digitada
        senhaDigitada = senhaDigitada.slice(0, -1);
        atualizarDisplay();
    });

});