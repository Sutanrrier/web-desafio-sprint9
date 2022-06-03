const myHeaders = new Headers();
myHeaders.append("Content-type", "application/json; charset=UTF-8");

function salvarCarro() {
    const cor = document.getElementById("cor").value;
    const placa = document.getElementById("placa").value;
    const velocidademax = document.getElementById("velocidademax").value;
    const estacionamento_id = document.getElementById("estacionamento_id").value;

    const body = {
        "cor": cor,
        "placa": placa,
        "velocidademax": velocidademax,
        "estacionamento": {
            "id": estacionamento_id
        }
    }

    const options = {
        method: "POST",
        body: JSON.stringify(body),
        mode: "cors",
        cache: "default",
        headers: myHeaders
    }

    const url = "http://localhost:8080/carros"

    fetch(url, options)
        .then(response => (response.json())
            .then(data => (console.log(data))));

    alert("Carro cadastrado com sucesso!");
}
