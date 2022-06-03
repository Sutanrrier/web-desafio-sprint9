//Headers para a Fetch API
const myHeaders = new Headers();
myHeaders.append("Content-type", "application/json; charset=UTF-8");

//POST - Gera um JSON com os campos do formulario e envia como body da requisição
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

//GET - Retorna todos os carros dentro do banco e gera uma tabela com o JSON de resposta
function criarTabelaCarro() {
    let tabela = document.getElementById("tabelaCarros")

    function criaLinha(objeto) {
        let linha = document.createElement("tr");

        // Criando as colunas da linha
        let colunaId = document.createElement("td");
        let colunaCor = document.createElement("td");
        let colunaPlaca = document.createElement("td");
        let colunaVelocidade = document.createElement("td");
        let colunaEstacionamento = document.createElement("td");

        //Injetando informação nas colunas da linha
        colunaId.innerHTML = objeto.id;
        colunaCor.innerHTML = objeto.cor;
        colunaPlaca.innerHTML = objeto.placa;
        colunaVelocidade.innerHTML = objeto.velocidademax;
        colunaEstacionamento.innerHTML = objeto.estacionamento.nome;

        //Colocando as colunas dentro da linha
        linha.appendChild(colunaId);
        linha.appendChild(colunaCor);
        linha.appendChild(colunaPlaca);
        linha.appendChild(colunaVelocidade);
        linha.appendChild(colunaEstacionamento);
        
        return linha;
    }

    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    const url = "http://localhost:8080/carros"

    fetch(url, options)
        .then(response => response.json()
            .then(data => (data.forEach(element => {
                let linha = criaLinha(element);
                tabela.appendChild(linha);
            }))));
}