class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number 
    }

    choseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperand.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-ac]')
const previousOperand = document.querySelector('[data-p-operand]')
const currentOperand = document.querySelector('[data-c-operand]')


const calcualtor = new Calculator(previousOperand, currentOperand)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calcualtor.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
