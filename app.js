function criarcartaao(categoria, pergunta, resposta) {
const container = document.getElementById(container)
const cartao = document.createElement(article)

cartao.className = 'cartao'

cartao.innerHTML = `
        <div class="cartao_conteudo">
            <h3>${categoria}</h3>
            <div class="pergunta">
                ${pergunta}
            </div>
            <div class="resposta">
                ${resposta}
            </div>
        </div>
    `
              let respostavisivel = false
              function viraCartao(){
                respostavisivel = !respostavisivel
                cartao.classlist.toggle("actrive",respostavisivel)
            }
            cartao.addvertListener('click', viraCartao)

                  container.appendChild (cartao)
cartao.innerHTML = `
<div class="cartao_conteudo"`

}
