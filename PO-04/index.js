document.addEventListener('DOMContentLoaded', function () {

    var buttons = document.querySelectorAll('.roteiro-comprar');

    // Adicione um evento de clique a cada botão
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {                    
            var destino = this.parentElement.querySelector('.roteiro-destino').textContent;
            var preco = this.parentElement.querySelector('.roteiro-preco').textContent;
            var observacoes = this.parentElement.querySelector('.roteiro-obs').textContent;

            
            var pacoteTuristico = {
                destino: destino,
                preco: preco,
                observacoes: observacoes
            };

            console.log(JSON.stringify(pacoteTuristico, null, 2));
        });
    });
});