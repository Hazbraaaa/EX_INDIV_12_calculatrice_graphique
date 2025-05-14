// init variables

const dial = document.querySelector(".dial");
let dialCurrentContent = dial.value;


// init functions

function printKey(value) {
    dialCurrentContent += value;
    dial.value = dialCurrentContent;
}

function clearDial() {
    dialCurrentContent = " ";
    dial.value = dialCurrentContent;
}

function deleteKey() {
    dialCurrentContent = dialCurrentContent.slice(0, -1);
    dial.value = dialCurrentContent;
}

function add(str) {
    let splitAdd = str.split("+");
    let addResult = 0;

    splitAdd.forEach(element => {
        if (element.includes("-")) {
            addResult += sub(element);
        }
        else {
            addResult += Number(element);
        }
    });
    return addResult;
}

function sub(str) {
    let splitSub = str.split("-").map(Number);
    let subResult = splitSub.slice(1).reduce((accumul, current) => accumul - current, splitSub[0]);

    return subResult;
}

function calculate() {
    let result = 0;

    result = add(dialCurrentContent);
    dial.value = result.toFixed(2);
}


// execute code

