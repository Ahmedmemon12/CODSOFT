
let currentValue = '0';
let memoryValue = '0';


function updateDisplay() {
    document.getElementById('display').textContent = currentValue;
}


function appendtodisplay(value) {
    if (currentValue === '0' && value !== '.') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(currentValue);
        if (!isNaN(result)) {
            if (Number.isInteger(result)) {
                currentValue = result.toString(); // Display as integer if no decimal places
            } else {
                currentValue = result.toFixed(4); // Fixed to 4 decimal places
                // Remove trailing zeros if any
                currentValue = currentValue.replace(/\.?0+$/, "");
            }
        } else {
            currentValue = 'Error';
        }
    } catch (error) {
        currentValue = 'Error';
    }
    updateDisplay();
}

function addToMemory() {
    memoryValue = (parseFloat(memoryValue) + parseFloat(currentValue)).toString();
}

function subtractFromMemory() {
    memoryValue = (parseFloat(memoryValue) - parseFloat(currentValue)).toString();
}

function recallMemory() {
    currentValue = memoryValue;
    updateDisplay();
}

document.getElementById('mplus').addEventListener('click', addToMemory);
document.getElementById('mminus').addEventListener('click', subtractFromMemory);
document.getElementById('mrc').addEventListener('click', recallMemory);
