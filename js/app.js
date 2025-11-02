let carrinho = [];
let produtos = document.getElementById('lista-produtos')
let total = document.getElementById('valor-total')

function limpar () {

    if (produtos != "") {
        produtos.innerHTML = ""
    }
    if (total != "") {
        total.innerHTML = "R$0,00"
    }
  

}
function adicionar() {
  let produtoSelect = document.getElementById('produto');
  let quantidadeInput = document.getElementById('quantidade');
  let listaProdutos = document.getElementById('lista-produtos');

  let produtoTexto = produtoSelect.value;
  let quantidade = parseInt(quantidadeInput.value) || 1;

  let [nome, precoTexto] = produtoTexto.split(' - ');
  let preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));

  let novoProduto = document.createElement('section');
  novoProduto.classList.add('carrinho__produtos__produto');
  novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${(preco * quantidade).toFixed(2)}</span>`;

  listaProdutos.appendChild(novoProduto);

  atualizarTotal();
}

function atualizarTotal() {
  let produtos = document.querySelectorAll('.carrinho__produtos__produto');
  let total = 0;

  produtos.forEach(prod => {
    let spans = prod.querySelectorAll('.texto-azul');
    let precoTexto = spans[1].textContent.replace('R$', '').replace(',', '.');
    total += parseFloat(precoTexto);
  });

  document.getElementById('valor-total').textContent = `R$${total.toFixed(2)}`;
}