const form = document.getElementById('agenda');
const nomes = [];
const numeros = [];
const apelidos = [];
const emails = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    criarLinhas();
    armazenados();
});

function criarLinhas() {
    const contNome = document.getElementById('nome');
    const contNumero = document.getElementById('numero');
    const contApelido = document.getElementById('apelido');
    const contEmail = document.getElementById('email');

    console.log('Nome:', contNome.value);
    console.log('Número:', contNumero.value);

    if (numeros.includes(contNumero.value)) {
        alert('Já adicionado');
    } else {
        nomes.push(contNome.value);
        numeros.push(contNumero.value);
        apelidos.push(contApelido.value);
        emails.push(contEmail.value);

        let linha = '<tr>';
        linha += `<td>${contNome.value}</td>`;
        linha += `<td>${contNumero.value}</td>`;
        linha += `<td>${contApelido.value}</td>`;
        linha += `<td>${contEmail.value}</td>`;
        linha += '</tr>';

        // Adiciona a última linha à tabela
        const tabela = document.getElementById('contatos').querySelector('tbody');
        tabela.insertAdjacentHTML('beforeend', linha);
    }
}

function armazenados() {
    document.getElementById('armazenados').innerHTML = `Contatos: ${nomes.length}`;
};
