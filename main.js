/* DARK MODE COM LOCAL STORAGE */
const toggleDark = document.getElementById("toggle-dark");

/* Recupera o tema salvo */
const temaSalvo = localStorage.getItem("tema");

/* Se o tema salvo for claro, aplica automaticamente */
if (temaSalvo === "light") {

    document.body.classList.add("light-mode");

    if (toggleDark) {
        toggleDark.innerHTML = "☀️ Modo claro";
    }

}

/* Evento do botão */
if (toggleDark) {

    toggleDark.onclick = function () {

        /* Alterna o tema */
        document.body.classList.toggle("light-mode");

        /* Verifica qual tema está ativo */
        if (document.body.classList.contains("light-mode")) {

            toggleDark.innerHTML = "☀️ Modo claro";

            /* Salva o tema claro */
            localStorage.setItem("tema", "light");

        } else {

            toggleDark.innerHTML = "🌙 Modo escuro";

            /* Salva o tema escuro */
            localStorage.setItem("tema", "dark");
        }

    };
}

/* FORMULÁRIO DE CONTATO */
const formulario = document.getElementById("formulario-contato");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const status = document.getElementById("mensagem-status");

        if (nome === "" || email === "" || mensagem === "") {

            status.innerHTML = "Preencha todos os campos!";
            status.style.color = "red";

            return;
        }

        status.innerHTML = "Mensagem enviada com sucesso!";
        status.style.color = "lime";

        formulario.reset();

    });

}