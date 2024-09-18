document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = 'block'
    // formContainer.classList.remove('hidden');  or
    const outMoneyContainer = document.getElementById('form-container2');
    outMoneyContainer.classList.add('hidden');
    // outMoneyContainer.style.display = 'none' or
})
document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const formContainer = document.getElementById('form-container2');
    // formContainer.style.display = 'block';   or,
    formContainer.classList.remove('hidden');
    const addMoneyContainer = document.getElementById('form-container');
    // addMoneyContainer.classList.add('hidden');   or,
    addMoneyContainer.style.display = 'none'
})
document.getElementById('adding-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const pinNumber = document.getElementById('pinNumber').value;
    const balance = document.getElementById('balance').innerText;
    if (pinNumber === '1234') {
        let newBalance = parseInt(balance)
        // TotalBalance = parseFloat(newBalance) + parseFloat(amount);   Or,
        TotalBalance = +newBalance + +amount;
        // console.log(TotalBalance)
        document.getElementById('balance').innerText = TotalBalance.toString();
    }
    else {
        alert('something is wrong')
    }
})
document.getElementById('cashing-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('cashing-amount').value;
    const pinNumber = document.getElementById('cashing-pinNumber').value;
    const balance = document.getElementById('balance').innerText;
    if (pinNumber === '1234') {
        let newBalance = parseInt(balance)
        // TotalBalance = parseFloat(newBalance) - parseFloat(amount);   Or,
        TotalBalance = +newBalance - +amount;
        // console.log(TotalBalance)
        document.getElementById('balance').innerText = TotalBalance;
    }
    else {
        alert('something is wrong')
    }
})