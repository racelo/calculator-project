// const mathOp = {
//     add: function(n1, n2) {
//         return n1 + n2;
//     },

//     subtract: function(n1, n2) {
//         return n1 - n2;
//     },

//     multiply: function(n1, n2) {
//         return n1 * n2;
//     },

//     divide: function(n1, n2) {
//         return n1 / n2;
//     }
// }

const mathObj = {
    n1: 0,
    n2: 0,
    result: 0,
    add: function(n1, n2) {
        return this.n1 + this.n2;
    },

    subtract: function(n1, n2) {
        return this.n1 - this.n2;
    },

    multiply: function(n1, n2) {
        return this.n1 * this.n2;
    },

    divide: function(n1, n2) {
        return this.n1 / this.n2;
    },

    operate: function(operator, n1, n2) {
        console.log(`op: ${operator}, n1: ${n1}, n2: ${n2}`);
        return this[operator](n1, n2);
    },
}

const numBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll("button");
const display = document.getElementById("displayText");


let operator;
let lastBtnClicked;



buttons.forEach(button => button.addEventListener("click", calculateNum));

// Add a +/- button to give a negative or positive sign to a value

function calculateNum(e) {
    

    if(e.target.id === "negate" && display.textContent) {
        if(display.textContent.includes("-")) {
            display.textContent = display.textContent.replace("-", "");
        } else {
            display.textContent = `-${display.textContent}`;
        }
    }

    if (lastBtnClicked === "operator") {
        display.textContent = "";
    }

    if (e.target.className === "num") {
        display.textContent += e.target.textContent;
    } else if (e.target.className === "operator" && display.textContent) {
        if (!mathObj.n1) {
            mathObj.n1 = Number(display.textContent);
            operator = e.target.id;
        } else if (!mathObj.n2) {
            mathObj.n2 = Number(display.textContent);
            result = mathObj.operate(operator, mathObj.n1, mathObj.n2);
            display.textContent = result;
            operator = e.target.id;
            mathObj.n1 = result;
            mathObj.n2 = 0;
        }        
    } else if (e.target.id === "equals" && mathObj.n1) {
        mathObj.n2 = Number(display.textContent);
        result = mathObj.operate(operator, mathObj.n1, mathObj.n2);
        display.textContent = result;
        mathObj.n1 = 0;
        mathObj.n2 = 0;
    }
    
    lastBtnClicked = e.target.className;

}


// let num1 = mathObj.n1;
// console.log(num1);
// num1 = 2;
// console.log(num1);

// console.log(mathObj.n2);

/*
function calculateNum(e) {
    let currentText = display.textContent;

    
    if (lastBtnClicked === "operator") {
        display.textContent = "";
    }

    if (e.target.className === "num") {
        displayText(e);
    } else if (e.target.className === "operator" && currentText) {
        if (!numOne) {
            numOne = Number(display.textContent);
            operator = e.target.id;
        } else if (!numTwo) {
            numTwo = Number(display.textContent);
            result = operate(operator, numOne, numTwo);
            display.textContent = result;
            operator = e.target.id;
            numOne = result;
            numTwo = 0;
        }        
    } else if (e.target.id === "equals" && numOne) {
        numTwo = Number(display.textContent);
        result = operate(operator, numOne, numTwo);
        display.textContent = result;
        numOne = 0;
        numTwo = 0;
    }
    
    lastBtnClicked = e.target.className;
}
*/