/*
CLASSES - CLASSES PROPERTIES, JAVASCRIPT METHODS, DOM-MANIPULATION, 
CONDITIONALS, TEMPLATE LITERALS AND REGULAR FUNCTIONS
*/

// BankClass SetUp
class Bank {
    constructor(balance) {
        this.balance = balance
    }
    // Withdraw Method
    withdraw(amount) {
        // guard clause for withdraw
        // 1st guard: The Client cannot withdraw negative
        if (this.balance - amount <= 0) {
            alert("❌You Cannot Withdraw More Than You Have!❌")
            console.log({balance: this.balance})
            return
        } 
        // 2nd guard: The Client cannot Withdraw more than 1000000$
        else if(amount > 1000000) {
            alert("❌You cannot Withdraw more than 1,000,000$!")
            console.log({balance: this.balance})
            return
        }
            this.balance -= amount
            console.log('withdrew', `$${amount}`)
            console.log({balance: this.balance})
        
    }
    // Deposit Method
    deposit(amount) {
        this.balance += amount
        console.log('deposited', `$${amount}`)
        console.log({balance: this.balance})
    }
}
// Create a New Object Bank Class: bankChecking 
const bankChecking = new Bank(0)
// bankChecking.deposit(100)
// bankChecking.withdraw(50)
// console.log(bankChecking.balance)

// Setup the Buttons (deposit, withdraw), the amountInput and the balanceDiv for the UI.
const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

// Deposit Function
depositButton.onclick = () => {
  const amount = Number(amountInput.value)
  bankChecking.deposit(amount)
  // Show the Balance after the Deposit in the UI and 
  //Setup the balance into 1,000,000 with .toLocaleString('en-US') Method
  balanceDiv.innerText = `Your Current Balance is: ${bankChecking.balance.toLocaleString('en-US')}$.`  
}

// Withdraw Function
withdrawButton.onclick = () => {
  const amount = Number(amountInput.value)
  bankChecking.withdraw(amount)
  // Show the Balance after the Withdraw in the UI and 
  //Setup the balance into 1,000,000 with .toLocaleString('en-US') Method
  balanceDiv.innerText = `Your Balance is Now: ${bankChecking.balance.toLocaleString('en-US')}$.`
} 


//<=>