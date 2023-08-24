const form = document.getElementById('form-contato');
let linhas = ''

let contador = 0

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaTabelaContato();
    atualizaQtdContatos();
    
})

function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato')


    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    
}

function atualizaTabelaContato(){
    const corpoDaTabela = document.querySelector('tbody');
    corpoDaTabela.innerHTML = linhas
}

function atualizaQtdContatos(){
    contador ++
    let linhaContadora = document.querySelector('.cont')
    linhaContadora.innerHTML = `${contador}`
}

function validarNumero(input) {
    input.value = input.value.replace(/\D/g, ''); 
}


