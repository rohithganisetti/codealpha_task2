let inputData = document.querySelector('#input-data');
let buttons = document.querySelectorAll('button');
let result = "";

Array.from(buttons).forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=') {
            result = eval(result);
            inputData.value = result;

        } else if(e.target.innerHTML == 'AC') {
            result = "";
            inputData.value = result;
        } else if(e.target.innerHTML == 'DEL') {
            result = result.substring(0,result.length-1);
            inputData.value = result;
        } else {
            result += e.target.innerHTML;
            inputData.value = result;
        }
    })
})
