function calculate(){
    const num1 = document.getElementById("num").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("select").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    if (num1 === "" || num2 === "") {
        errorDiv.style.marginLeft = "20px";
        errorDiv.style.display = "inline-block";
        errorDiv.textContent = "Пожалуйста, введите оба числа.";
        resultDiv.textContent = "";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    resultDiv.style.marginLeft = "20px";
    resultDiv.style.display = "inline-block";
    
    switch(operation){
    case "add":
        result = number1 +number2;
        break;
    case "divide":
        if(number2 === 0){
            errorDiv.textContent = "Делить на ноль нельзя!!!";
            resultDiv.textContent ="";
            return; 
        }
        result = number1 / number2;
        break;
    case "multiply":
        result = number1 * number2;
        break;
    case "subtract":
        result = number1 - number2;
        break;
    default:
        result = "Неизвестная операция";
    }

    resultDiv.textContent = result;
    errorDiv.textContent = "";
}