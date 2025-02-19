let Myinput  =  document.querySelector(".Myinput");
let buttons   =  document.querySelectorAll(".btn");
const operators = ['+', '-', '*', '/', '%', '.'];


buttons.forEach(button => {
        button.addEventListener('click', HandleButtonClick);
    });

function HandleButtonClick(e){
    const ButtonValue = e.target.innerText;
    const lastChar = Myinput.value.slice(-1);  //For getting the last character
    
    switch (ButtonValue){
        //All Clear
        case 'AC':
        Myinput.value = '';
        break;      
        
        //One digit clear
        case 'C':
        Myinput.value = Myinput.value.slice(0,-1);
        break;

        //For Numbers
        case '0':
            // Prevent multiple leading zeros
            let lastNumber = Myinput.value.split(/[\+\-\*\/\%]/).pop(); 
            if (lastNumber !== "0") {  
                Myinput.value += ButtonValue;
            }
            break;
        case'1':
        case'2':
        case'3':
        case'4':
        case'5':
        case'6':
        case'7':
        case'8':
        case'9':
        Myinput.value += ButtonValue;
        break;

        //For Operators 
        case '+':
        case'-': 
        case'*': 
        case'/': 
        case'%':
        case'.':  
        if(  Myinput.value>0 && !operators.includes(lastChar))  {
            Myinput.value += ButtonValue;
        }
        break;

        //For Result
        case '=':
        try {
            Myinput.value = eval(Myinput.value);
        }
         catch (error) 
        {
            Myinput.value = "Error";
        }
        break;
    }
}




//Completed































