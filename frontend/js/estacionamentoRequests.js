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

//GET - Retorna todos os carros dentro do banco e gera uma tabela com o JSON de resposta
function criarTabelaEstacionamento() {
    let tabela = document.getElementById("tabelaEstacionamento")

    function criaLinha(objeto) {
        let linha = document.createElement("tr");

        // Criando as colunas da linha
        let colunaId = document.createElement("td");
        let colunaNome = document.createElement("td");
        
        //Injetando informação nas colunas da linha
        colunaId.innerHTML = objeto.id;
        colunaNome.innerHTML = objeto.nome;

        //Colocando as colunas dentro da linha
        linha.appendChild(colunaId);
        linha.appendChild(colunaNome);

        return linha;
    }

    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    const url = "http://localhost:8080/estacionamentos"

    fetch(url, options)
        .then(response => response.json()
            .then(data => (data.forEach(element => {
                let linha = criaLinha(element);
                tabela.appendChild(linha);
            }))));
}