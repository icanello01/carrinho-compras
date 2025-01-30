let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1].replace('.', ''));
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, adicione uma quantidade acima de 0"); // Mensagem de aviso
        return; // Sai da função se a quantidade for inválida
    }

    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
    </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    document.getElementById('quantidade').value = ''; // Limpa o campo de quantidade após adicionar
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0,00';
}