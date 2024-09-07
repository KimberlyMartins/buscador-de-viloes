function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um vilão</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let detalhes = "";
    let tags = "";
    let trailer = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of vilao) {
        let nome = ""; nome = dado.nome.toLowerCase()

        let tags = ""; tags = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || detalhes.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.nome}
                </h2>
                <p class="descricao-meta">${dado.detalhes}</p>
                <a href=${dado.trailer} target="_blank">Acesse o trailer</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Não encontrei seu vilão</p>"
    };
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}