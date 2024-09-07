function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";

    // Inicializa a variável como false. 
    // Será alterada para true se encontrar algum resultado durante a busca.
    let encontrouResultado = false; 

    // Valida se o campo de pesquisa está vazio.
    if(campoPesquisa.trim() === ""){
        // Se o campo estiver vazio, exibe uma mensagem informando e encerra a função.
        section.innerHTML = `
        <div class="item-resultado">
            <h2>
               Campo vazio!
            </h2>
        </div>
        `;
        return;
    }

    // Itera sobre cada objeto 'dado' dentro do array 'dados'.
    for (let dado of dados) {
        // Converte o título, a descrição e as tags do item atual para minúsculas para comparação.
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tag = dado.tags.map(tag => tag.toLowerCase());
        
        // Verifica se o campo de pesquisa está presente no título, descrição ou tags do item atual.
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
            // Se a pesquisa encontrar correspondência:
            // Constrói o HTML para o resultado encontrado, incluindo o título (com link), a descrição e um link para mais informações.
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="${dado.link}" target="_blank"> ${dado.titulo} </a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;      
            // Define a variável encontrouResultado como true, indicando que um resultado foi encontrado.
            encontrouResultado = true; 
        } 
    }

    // Após o loop, verifica se algum resultado foi encontrado.
    // Se encontrouResultado for false (nenhum resultado encontrado), exibe uma mensagem informando.
    if (!encontrouResultado) { 
        section.innerHTML = `
        <div class="item-resultado">
            <h2>
               Sem dados!
            </h2>
        </div>
        `;
    // Caso contrário (se encontrou algum resultado), exibe os resultados encontrados.
    } else {
        section.innerHTML = resultados; 
    }
}