const display = document.getElementById("display");

let memory = 0;
let gt = 0;

function append(value){
    display.value += value;
}

function clearAll(){
    display.value = "";
}

function calculate(){
    try{
        const result = eval(display.value);

        gt += Number(result);

        display.value = result;
    }catch{
        display.value = "Erro";
    }
}

function memoryStore(){
    if(display.value !== ""){
        memory = Number(display.value);
    }
}

function memoryRecall(){
    display.value = memory;
}

function memoryAdd(){
    memory += Number(display.value || 0);
}

function memorySub(){
    memory -= Number(display.value || 0);
}

function grandTotal(){
    display.value = gt;
}

function percent(){
    if(display.value !== ""){
        display.value = Number(display.value) / 100;
    }
}