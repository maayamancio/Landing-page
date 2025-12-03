// Aguardar o DOM estar carregado
document.addEventListener('DOMContentLoaded', function() {
    const togglecontainer = document.querySelector(".toggle-container");
    const backgroundcontainer = document.querySelector(".background-container");

    if (togglecontainer && backgroundcontainer) {
        console.log("Elementos encontrados, adicionando event listener");
        togglecontainer.addEventListener('click', function() {
            console.log("Toggle clicado!");
            togglecontainer.classList.toggle("dark");
            backgroundcontainer.classList.toggle("dark");
            document.body.classList.toggle("dark");
            console.log("Classes atualizadas. Body dark:", document.body.classList.contains('dark'));
        });
    } else {
        console.error("Elementos não encontrados - toggle:", togglecontainer, "background:", backgroundcontainer);
    }
});
