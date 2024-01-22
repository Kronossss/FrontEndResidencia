function inserirPacote() {
    // Capturar os valores do formulário
    var destino = document.getElementById('destino').value;
    var imagem = document.getElementById('imagem').value;
    var diarias = document.getElementById('diarias').value;
    var preco = document.getElementById('preco').value;
    var taxas = document.getElementById('taxas').checked;
    var parcelamento = document.getElementById('parcelamento').value;

    // Criar novo elemento roteiros-viagens
    var novoPacote = document.createElement('div');
    novoPacote.className = 'roteiros-viagens';

    // Preencher o conteúdo do novo pacote
    novoPacote.innerHTML = `
        <img src="${imagem}">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">
            <li>${diarias} diárias</li>
            <li>${preco}</li>
            <li>${taxas ? 'Taxas Inclusas' : 'Taxas Não Inclusas'}</li>
        </ul>
        <div class="roteiro-parcelamento">${parcelamento}</div>
        <button class="roteiro-comprar">Comprar</button>
    `;

    // Adicionar o novo pacote ao container-destinos
    document.querySelector('.container-destinos').appendChild(novoPacote);
}
