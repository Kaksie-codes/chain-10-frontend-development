// Selecting DOM Elements
const billInput = document.getElementById('bill');
const tipPercentageButtons = document.querySelectorAll('.tip-btn');
const customTipButton = document.getElementById('custom-tip');
const personsCountInput = document.getElementById('people');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset-btn')


let bill = billInput.value;
let noOfPeople = personsCountInput.value;
let tipPercentage;


billInput.addEventListener('input', (e) => {  
    bill = e.target.value;
    // console.log({bill})
})

personsCountInput.addEventListener('input', (p) => {
    noOfPeople = p.target.value;
    // console.log({noOfPeople})
    calculateTip();
})


tipPercentageButtons.forEach(button => {
    button.addEventListener('click', () => {
        let tip = button.textContent
        console.log(tip.slice(0, -1))
        tip = tip.slice(0, -1);
        tipPercentage = tip/100
        // console.log({tipPercentage})
        calculateTip();
    })
})


function calculateTip(){
    console.log({tipPercentage, noOfPeople, bill})
      console.log(isNaN(bill))
    if(bill === '' || isNaN(bill)){
       return  alert('invalid bill')
    }
    if(noOfPeople === ''){
        return
    }
    if(isNaN(noOfPeople) ||  Number(noOfPeople) < 1){
       return  alert('invalid NUMBER OF PEOPLE')
    }

    let tipAmount = (bill * tipPercentage)/noOfPeople
    console.log({tipAmount})
    tipAmountDisplay.textContent = `$ ${tipAmount}`
    let totalBill = (bill/noOfPeople) + tipAmount
    totalAmountDisplay.textContent = `$ ${totalBill}`
    resetButton.classList.remove('disabled')
}

customTipButton.addEventListener('click', () => {
    let customTip = prompt('Enter your custom tip percentage');
    const regex = /[^0-9%]|%(?=.*%|.+)/;
    if(regex.test(customTip)){
        return alert('Invalid entry')
    }
    customTip = Number(customTip.replace(/%$/, ""))
    tipPercentage = customTip/100;
     calculateTip();
})

resetButton.addEventListener('click', () => {
    totalAmountDisplay.textContent = '$ 0.00';
    tipAmountDisplay.textContent = '$ 0.00';
    personsCountInput.value = 1;
    billInput.value = '';
    noOfPeople = '';
    bill = '';
    tipPercentage = '';
    resetButton.classList.add('disabled')
})