//Headers para a Fetch API
const myHeaders = new Headers();
myHeaders.append("Content-type", "application/json; charset=UTF-8");

//POST - Gera um JSON com os campos do formulario e envia como body da requisição
function salvarEstacionamento() {
    const nome = document.getElementById("nome").value;

    const url = "http://localhost:8080/estacionamentos"
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

    fetch(url, options)
        .then(response => (response.json())
            .then(data => (console.log(data))));

    alert("Estacionamento cadastrado com sucesso!");
}

//Cria o cabeçalho da tabela
function criaCabecalhoTabela() {
    const linha = document.createElement("tr");

    // Criando as colunas da linha
    let colunaId = document.createElement("th");
    let colunaNome = document.createElement("th");

    //Injetando informação nas colunas da linha
    colunaId.innerHTML = "ID";
    colunaNome.innerHTML = "NOME";

    //Colocando as colunas dentro da linha
    linha.appendChild(colunaId);
    linha.appendChild(colunaNome);

    return linha;
}

//Cria uma linha para a tabela de consulta
function criaLinhaTabela(objeto) {
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

//GET - Retorna todos os estacionamentos dentro do banco e gera uma tabela com o JSON de resposta
function criarTabelaEstacionamento() {
    const tabela = document.getElementById("tabelaEstacionamento");

    const cabecalho = criaCabecalhoTabela();
    tabela.appendChild(cabecalho);

    const url = "http://localhost:8080/estacionamentos"
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(url, options)
        .then(response => response.json()
            .then(data => (data.forEach(element => {
                let linha = criaLinhaTabela(element);
                tabela.appendChild(linha);
            }))));
}

//GET - Retorna um estacionamento dentro do banco a partir de um ID e gera uma tabela com o JSON de resposta
function criarTabelaEstacionamentoId() {
    const tabela = document.getElementById("tabelaEstacionamentoId");
    const idEstacionamento = document.getElementById("idPesquisaEstacionamento").value;

    //Checa se existe filhos na tabela e caso exista, remove todos os filhos dela.
    const childrensTabela = tabela.childNodes;

    if (childrensTabela.length > 1) {
        tabela.removeChild(childrensTabela[1]);
        tabela.removeChild(childrensTabela[1]);
    }

    const cabecalho = criaCabecalhoTabela();
    tabela.appendChild(cabecalho);

    const url = `http://localhost:8080/estacionamentos/${idEstacionamento}`;
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(url, options)
        .then(response => response.json()
            .then(data => {
                let linha = criaLinhaTabela(data);
                tabela.appendChild(linha)
            }))
        .catch(e => {
            alert("Estacionamento não encontrado no banco de dados!");
            tabela.removeChild(childrensTabela[1]);
        });

}