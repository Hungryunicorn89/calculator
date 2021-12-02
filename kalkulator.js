document.getElementById("send").addEventListener("click", calculateIt); // when button will be click 

function calculateIt () {
    // making a new variables

    var myOperator; 
    var result; 

    // download operands
    var operand1 = document.getElementById("operand1").value; 
    var operand2 = document.getElementById("operand2").value; 

    // download the type of operands
    var chooseElement1 = document.getElementById("typeOperand1"); 
    var chooseElement2 = document.getElementById("typeOperand2"); 

    var typeOperand1 = chooseElement1.value; 
    var typeOperand2 = chooseElement2.value; 

    // download operator
    var operatorElement = document.getElementsByName("operator"); 

    // convert operator
    switch (typeOperand1) { 
        case "string":
            operand1 = String(operand1 + " ");
            break;
        case "number":
            operand1 = Number(operand1);
            break;
    }

    switch (typeOperand2) {
        case "string":
            operand2 = String(+ " " + operand2);
            break;
        case "number":
            operand2 = Number(operand2);
            break;
    
    }
    // check every operand and find out the marked 
    for (var i = 0, numberOperators = operatorElement.length; i < numberOperators; i++) {

        if (operatorElement[i].checked) {
            myOperator = operatorElement[i].value.trim(); 

             // make a the right task
            switch (operatorElement[i].value) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2; 
                    break; 
                 case "*":
                    result = operand1 * operand2; 
                    break; 
                case "/":
                    result = operand1 / operand2; 
                    break; 
                case "%":
                    result = operand1 % operand2;
                    break;
                case "concanetation": 
                    result = operand1 + operand2;
                    myOperator = "+"; 
                    break;
                case "==":
                    result = operand1 == operand2;
                    break;
                case "===":
                    result = operand1 === operand2;
                    break;
                case "!=":
                    result = operand1 != operand2;
                    break;
                case "!==":
                    result = operand1 !== operand2; 
                    break;
                case ">":
                    result = operand1 > operand2;
                    break; 
                case ">=":
                    result = operand1 >= operand2;
                    break;
                case "<": 
                    result = operand1 < operand2; 
                    break;
                case "<=":
                    result = operand1 <= operand2; 
                    break; 
                    
            }
            break; 
        }
    }
        //show operation
        if (typeof(operand1) === "string") {
            operand1 = '"' + operand2 + '"'; 
        
        }
        if (typeof(operand2) === "string") {
            operand2 = '"' + operand2 + '"'; 

        }
        document.getElementById("finalOperation").innerHTML = operand1 + myOperator + operand2; 

        //show result
        document.getElementById("result").innerHTML = result; 
    }

