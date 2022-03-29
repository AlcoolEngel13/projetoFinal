function inserirNome() {
    let nome = prompt("Insira seu nome aqui:")
    while(nome == null) {
        nome = prompt("Insira seu nome aqui:")
    }
    alert(`Olá ${nome}, bem vindo ao Usados QI`)
}

inserirNome();