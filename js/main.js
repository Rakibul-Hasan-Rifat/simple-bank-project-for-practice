//javascript for hiding login page and showing main-page
var loginPageButton = document.querySelector('#login-page #login-card button');

loginPageButton.addEventListener('click', function(){
    document.querySelector('#login-page').style.display = 'none';
    document.querySelector('#main-page').style.display = 'block';
})

// button selector
var depositButton = document.querySelector('#main-page .deposit button');
var withdrawButton = document.querySelector('#main-page .withdraw button');

// selecting upcoming necessary elements
var depositSpan = document.querySelector('#main-page .deposit-card span');
var withdrawSpan = document.querySelector('#main-page .withdraw-card span');
var balanceSpan = document.querySelector('#main-page .balance-card span');
var depositInput = document.querySelector('#main-page .deposit input');
var withdrawInput = document.querySelector('#main-page .withdraw input');

// function for adding numbers
function addition(num1, num2){
    return num1 + num2;
}

// function for making an input empty
function makingInputEmpty(input){
    input.value = "";
}

depositButton.addEventListener('click', function(){
    var depositSpanValue = parseFloat(document.querySelector('#main-page .deposit-card span').innerText);
    var depositInputValue = parseFloat(document.querySelector('#main-page .deposit input').value);
    var totalDepositValue = addition(depositInputValue, depositSpanValue);
    depositSpan.innerText = totalDepositValue;

    var balanceSpanValue = parseFloat(document.querySelector('#main-page .balance-card span').innerText);
    var totalBalanceValue = addition(balanceSpanValue, depositInputValue);
    balanceSpan.innerText = totalBalanceValue;

    makingInputEmpty(depositInput);
})

withdrawButton.addEventListener('click', function(){
    var withdrawSpanValue = parseFloat(document.querySelector('#main-page .withdraw-card span').innerText);
    var withdrawInputValue = parseFloat(document.querySelector('#main-page .withdraw input').value);
    var totalWithdrawValue = addition(withdrawInputValue, withdrawSpanValue);
    withdrawSpan.innerText = totalWithdrawValue;

    var balanceSpanValue = parseFloat(document.querySelector('#main-page .balance-card span').innerText);
    var totalBalanceValue = addition(-1 * withdrawInputValue, balanceSpanValue);
    balanceSpan.innerText = totalBalanceValue;

    makingInputEmpty(withdrawInput);
})
