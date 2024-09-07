console.log("Moedas do Brasil");
// console.log(dados);
/*
moedas.forEach(moeda => {
    console.log(moeda.moedaCorrente);
    console.log(moeda.simbolo);
    //console.log(moeda.link);
});
*/

const dataHoje = new Date();

function validarInput(texto) {
    // Expressão regular para verificar se a string contém apenas caracteres alfanuméricos, espaços ou hífens
    // incluindo os caracteres acentuados (ficou faltando os acentuados em caixa alta)
    const regex = /^1|2\d{3}$/;    
    // Retorna true se a string corresponder à expressão regular, false caso contrário
    return regex.test(texto);
  }

function moedaAno() {
    // Busca a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Para fins de debug, verifica se a seção foi encontrada

    let anoPesquisa = document.getElementById("ano-pesquisa").value.trim();
    //console.log(anoPesquisa);
    
    // aborta pesquisa caso o campoPesquisa esteja em branco
    if (anoPesquisa == "") {
        section.innerHTML = "<h3>digite um ano entre 1900 e 2024</h3>"
        return;
    }
    
    // verifica se a string contém algum caractere inválido
    if(!validarInput(anoPesquisa)) {
        section.innerHTML = "<h3>valor inválido</h3>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";

    // converte o valor digitado para número
    let anoPesquisaNum = parseInt(anoPesquisa);
    console.log("Ano: " + anoPesquisaNum);
    // Itera sobre os dados das moedas e constrói o HTML para cada resultado
    // Lembrando que num mesmo ano pode ter havido mais de uma moeda em circulação
    moedas.forEach(moeda => {
        let moedaIni = parseInt(moeda.periodoValidade.inicio.slice(6));
        if (isNaN(moedaIni)) moedaIni = 1900;
        let moedaFim = parseInt(moeda.periodoValidade.fim.slice(6));
        if (isNaN(moedaFim)) moedaFim = dataHoje.getFullYear();
        console.log("Período: " + moedaIni + " - " + moedaFim);
        if ((anoPesquisaNum >= moedaIni) && (anoPesquisaNum <= moedaFim)) {
            // inclui o dado no HTML
            resultados += `
            <div class="item-resultado">
                <div>
                <a href="${moeda.link}" target="_blank">    <!-- Link para a fonte original -->
                <img src="${moeda.imagem}" alt="${moeda.moedaCorrente}" style="width: 300px; margin-right: 30px;"></a>
                </div><div><!-- Exibe algumas informações -->
                <h2>${moeda.moedaCorrente}</h2>
                <p class="descricao-meta">Símbolo: ${moeda.simbolo}</p>
                <p class="descricao-meta">Validade: de ${moeda.periodoValidade.inicio} até ${moeda.periodoValidade.fim}</p>
                <a href=https://www.bcb.gov.br/cedulasemoedas target="_blank">Mais informações</a>
                </div>
            </div>
            `
        }
    });

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    if (!resultados) resultados = "<h3>Nenhum registro não encontrado.</h3><h3>Verifique se você digitou corretamente...</h3>";
    section.innerHTML = resultados;
} // function moedaAno
