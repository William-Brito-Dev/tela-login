const form = document.getElementById('formLogin');
const btnLogar = document.getElementById('btnLogar');
const feedback = document.getElementById('mensagem-feedback');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Inicia simulação
    btnLogar.innerText = "Entrando...";
    btnLogar.disabled = true;
    feedback.style.display = "none";

    setTimeout(() => {
        // Sucesso na simulação
        btnLogar.innerText = "Logado!";
        btnLogar.style.backgroundColor = "#27ae60";
        btnLogar.style.color = "#fff";

        feedback.innerText = "Login realizado com sucesso! Redirecionando...";
        feedback.style.color = "#fff";
        feedback.style.display = "block";

        setTimeout(() => {
            // Reset do estado para o portfólio
            form.reset();
            btnLogar.innerText = "Login";
            btnLogar.disabled = false;
            btnLogar.style.backgroundColor = "#fff";
            btnLogar.style.color = "#333";
            feedback.style.display = "none";
        }, 3000);

    }, 1500);
});