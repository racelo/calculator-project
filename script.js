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


let operator = null;
let lastBtnClicked;

buttons.forEach(button => button.addEventListener("click", calculateNum));

function calculateNum(e) {
    if(e.target.id === "clear") {
        display.textContent = 0;
        operator = null;
        mathObj.n1 = 0;
    }
    
    if (lastBtnClicked === "operator") {
        display.textContent = "";
    }
    
    if(e.target.id === "negate" && display.textContent) {
        if(display.textContent.includes("-")) {
            display.textContent = display.textContent.replace("-", "");
        } else {
            display.textContent = `-${display.textContent}`;
        }
    }

    if(e.target.id === "dot") {
        if(!display.textContent) {
            display.textContent = `0${e.target.textContent}`;
        } else if(!display.textContent.includes(".")) {
            display.textContent += e.target.textContent;
        }
    }

    if (e.target.className === "num") {
        if(display.textContent === "0") {
            display.textContent = "";
        }
        display.textContent += e.target.textContent;
    } else if (e.target.className === "operator" && display.textContent !== "0") {
        if(!mathObj.n1 && lastBtnClicked === "equal") {
            mathObj.n1 = Number(display.textContent);
            operator = e.target.id;
        } else if (!mathObj.n1 && operator === null) {
            mathObj.n1 = Number(display.textContent);
            operator = e.target.id;
        } else if (!mathObj.n2) {
            mathObj.n2 = Number(display.textContent);
            result = mathObj.operate(operator, mathObj.n1, mathObj.n2);
            display.textContent = result % 1 !== 0 ? parseFloat(result.toFixed(10)): result;
            operator = e.target.id;
            mathObj.n1 = result;
            mathObj.n2 = 0;
        }        
    } else if (e.target.id === "equal" && mathObj.n1) {
        mathObj.n2 = Number(display.textContent);
        result = mathObj.operate(operator, mathObj.n1, mathObj.n2);
        display.textContent = result % 1 !== 0 ? parseFloat(result.toFixed(10)): result;
        mathObj.n1 = 0;
        mathObj.n2 = 0;
    }
    
    lastBtnClicked = e.target.className;
}