const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function writeOutput(operator, beforeResult, calcNumber) {
    const calcDescription = `${beforeResult} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const LogEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(LogEntry);
    console.Log(logEntries);
}

function add() {
    const enteredNumber = getUserInput();
    const IntialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    writeOutput('+', IntialResult, enteredNumber);
    writeToLog('ADD', IntialResult, enteredNumber, currentResult);
}
function subtract() {
    const enteredNumber = getUserInput();
    const IntialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    writeOutput('-', IntialResult, enteredNumber);
    writeToLog('SUBTRACT', IntialResult, enteredNumber, currentResult);
}
function add() {
    const enteredNumber = getUserInput();
    const IntialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    writeOutput('*', IntialResult, enteredNumber);
    writeToLog('MULTIPLY', IntialResult, enteredNumber, currentResult);
}
function add() {
    const enteredNumber = getUserInput();
    const IntialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    writeOutput('/', IntialResult, enteredNumber);
    writeToLog('DIVIDE', IntialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

