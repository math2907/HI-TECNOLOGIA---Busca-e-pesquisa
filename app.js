
const header = document.querySelector('.header');
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = '-50px'; // Ajuste o valor para controlar a distância
  }

  prevScrollpos = currentScrollPos;
}

function pesquisar(){

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
        console.log(campoPesquisa);

        if (!campoPesquisa) {
            section.innerHTML = "<p style='text-align: center; color: white;' >: Nada foi encontrado. : <br> : Você precisa escrever o nome de um produto. : </p>";

        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao= "";
    let tags= "";

    // Itera sobre os dados e cria elementos HTML para cada resultado
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descrição.toLowerCase()
        tags= dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            //cria um novo elemento
            console.log(titulo.includes(campoPesquisa))

            resultados += `
    
            <div class="item-resultado">
                <h2>
                    <a href="#" target= "blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descrição}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
       
    }

if(!resultados){
    resultados = "<p style='text-align: center; color: white;' >: Nenhum produto foi encontrado : <p>"

}

    // Atribui os resultados gerados à seção
    section.innerHTML = resultados;
}