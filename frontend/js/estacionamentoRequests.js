//Headers para a Fetch API
const myHeaders = new Headers();
myHeaders.append("Content-type", "application/json; charset=UTF-8");

//POST - Gera um JSON com os campos do formulario e envia como body da requisição
function salvarEstacionamento() {
    const nome = document.getElementById("nome").value;

    const body = {
        "nome": nome
    }
    const options = {
        method: "POST",
        body: JSON.stringify(body),
        mode: "cors",
        cache: "default",
        headers: myHeaders
    }

    const url = "http://localhost:8080/estacionamentos"

    fetch(url, options)
        .then(response => (response.json())
            .then(data => (console.log(data))));

    alert("Estacionamento cadastrado com sucesso!");
}