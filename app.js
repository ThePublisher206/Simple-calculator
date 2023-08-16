let screenn = '';

function displayNumbers(value) {
    screenn += value;
    document.getElementById('display').value = screenn;
}

function ClearWholeScreen() {
    screenn = '';
    document.getElementById('display').value = '';
}

function DeleteButton(value) {
    if (value !== -1) {
        screenn = screenn.slice(0, -1); // Remove the last character
    } else {
        displayNumbers(value);
    }
    document.getElementById('display').value = screenn;
    screenn = '';
}

function Calculate() {
    try {
        const result = eval(screenn);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = '';
        screenn = '';
    }
}
function PiCalculation(){
    pivalue = 3.14159265359 * screenn
    document.getElementById('display').value = pivalue;
    displayValue = pivalue.toString(); 
}


// Currency Calculator