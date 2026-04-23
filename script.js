const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Recupera dados do localStorage ou inicia vazio
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Por favor, adicione uma descrição e um valor');
    } else {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);
        updateValues();
        addTransactionDOM(transaction);
        updateLocalStorage();

        text.value = '';
        amount.value = '';
    }
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
        ${transaction.text} <span>${sign} R$ ${Math.abs(transaction.amount).toFixed(2)}</span>
    `;

    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerText = `R$ ${total}`;
    money_plus.innerText = `+ R$ ${income}`;
    money_minus.innerText = `- R$ ${expense}`;
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

form.addEventListener('submit', addTransaction);

// Inicializa a lista ao carregar a página
transactions.forEach(addTransactionDOM);
updateValues();