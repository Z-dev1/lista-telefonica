document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-lista');
    const nomeInput = document.getElementById('nome-lista');
    const numeroInput = document.getElementById('numero-lista');
    const tabelaBody = document.querySelector('tbody');
    

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        const nome = nomeInput.value.trim();
        const numero = numeroInput.value.trim();

        if (nome && numero) {
            // Cria uma nova linha na tabela
            const novaLinha = document.createElement('tr');

            // Cria e adiciona a célula do nome
            const nomeTd = document.createElement('td');
            nomeTd.textContent = nome;
            novaLinha.appendChild(nomeTd);

            // Cria e adiciona a célula do número
            const numeroTd = document.createElement('td');
            numeroTd.textContent = numero;
            novaLinha.appendChild(numeroTd);

            // Adiciona a nova linha ao corpo da tabela
            tabelaBody.appendChild(novaLinha);

            // Limpa os campos do formulário
            nomeInput.value = '';
            numeroInput.value = '';
        } else {
            alert('Por favor, preencha ambos os campos!');
        }
    });
});


        const telefoneInput = document.getElementById('telefone');

        telefoneInput.addEventListener('input', function(e) {
            let telefone = e.target.value;
            
            // Remove todos os caracteres não numéricos
            telefone = telefone.replace(/\D/g, '');

            // Adiciona a máscara do telefone
            if (telefone.length > 10) {
                telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (telefone.length > 5) {
                telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (telefone.length > 2) {
                telefone = telefone.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else {
                telefone = telefone.replace(/^(\d{0,2})/, '($1');
            }

            // Atualiza o campo de input
            e.target.value = telefone;
        });
