// init variables

const dial = document.querySelector(".dial");
let dialCurrentContent = dial.value;


// init functions

function printKey(value) {
    dialCurrentContent += value;
    dial.value = dialCurrentContent;
}

function calculate() {
    let result = 0;
    let addition = dialCurrentContent.split("+");

    addition.forEach(element => {
        if (element.includes("-")) {
            let substraction = element.split("-");
            
            result += Number(substraction[0]-substraction[1]);
        }
        else {
            result += Number(element);
        }
    });
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

