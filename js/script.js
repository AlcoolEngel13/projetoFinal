function enviarForm() {
    const buttonEnviar = document.getElementById("enviar");
    const inputNome = document.getElementById("name");

    if(inputNome.value != "") {
        alert(`Os dados foram enviados. Obrigado ${inputNome.value} por usar nosso site!!!`);
    };
};