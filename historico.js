// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Redireciona para menu.html ao clicar no botão de voltar
    const backBtn = document.querySelector('.back-button');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'menu.html';
        });
    }
    console.log('SorrisoTech - Histórico de Tratamentos loaded');
});