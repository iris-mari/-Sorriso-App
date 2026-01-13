// Simples script para demonstrar os cliques (sem redirecionamento real)
document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        alert(`Você clicou em: ${target}`);
        // Aqui você pode redirecionar ou carregar conteúdo dinamicamente
        // Ex: window.location.href = `${target}.html`;
    });
});

// Botão de voltar (opcional)
document.querySelector('.back-button').addEventListener('click', () => {
    window.history.back();
});