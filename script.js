// init variables

const dial = document.querySelector(".dial");
let dialCurrentContent = dial.value;


// init functions

function printKey(value) {
    dialCurrentContent += value;
    dial.value = dialCurrentContent;
}

function add(str) {
    let addition = str.split("+");
    let addResult = 0;

    addition.forEach(element => {
        if (element.includes("-")) {
            addResult += Number(subtract(element));
        }
        else {
            addResult += Number(element);
        }
    });
    return addResult;
}

function subtract(str) {
    let subtraction = str.split("-");
    let subResult = 0;

    subtraction.forEach(element => {
        subResult += Number(element);
    });
    subResult -= 2*subtraction[0];
    return -subResult;
}

function calculate() {
    let result = 0;

    result = add(dialCurrentContent);

    dial.value = result;
}

function clearDial() {
    dialCurrentContent = " ";
    dial.value = dialCurrentContent;
}

function deleteKey() {
    dialCurrentContent = dialCurrentContent.slice(0, -1);
    dial.value = dialCurrentContent;
}


// execute code

