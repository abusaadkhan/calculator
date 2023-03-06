let input = document.querySelector('.input')
let output = document.querySelector('.output')
let boxes = [...document.querySelectorAll('.box')]
let decimal = false
let enterSnum = false
let displayText = ''
let fNum = ''
let sNum = '' 
let op = ''
let res = 0

const enterValue = (e) => {
    // console.log(e.target.innerText);
    let num = e.target.innerText
    if(num == 'del'){
        delNum()
    }
    else{
    firstNum(num)

    }
}


const delNum = () => {
    //
    console.log('del run');
    if(sNum != ''){
        let digToBeDeleted = sNum[sNum.length-1]
        console.log(digToBeDeleted);
        if( digToBeDeleted == '.'){
            decimal = false
        }
        sNum =  sNum.slice(0,-1)
        input.innerText = fNum + op + sNum
        console.log(sNum);
    }
    else if(op != ''){
        op = ''
        enterSnum = false
        decimal = true
        input.innerText = fNum + op 
        console.log('operation',op);
    }
    else{
        let digToBeDeleted = fNum[fNum.length-1]
        console.log(digToBeDeleted);
        if( digToBeDeleted == '.'){
            decimal = false
        }
        fNum =  fNum.slice(0,-1)
        input.innerText = fNum
        console.log(fNum);
    }
}


const firstNum = (num) => {
    
    if(num == 'clear'){
        fNum = ''
        sNum = ''
        op = ''
        input.innerText = ''
        output.innerText = ''
        decimal = false
        enterSnum = false
    }
    else if(num == '='){
        operation()
        console.log(res);
        output.innerText = res
    }
    else if( num != '-' && num != '+' && num != '*' && num != '/' && num != '%'){
            if(num == '.'){
                if(decimal == true){
                    alert('decimal can be placed only once')
                    return
                }
                else{
                    decimal = true
                }
            }
            if(enterSnum == false){
                fNum = fNum + num
                console.log('firstnum :',fNum);
                // inText = inText + fNum
                input.innerText = fNum
            }
            else{
                sNum = sNum + num
                 console.log('snum:',sNum);
                 input.innerText = fNum + op + sNum
            }

    }
    else if(op == ''){
        enterSnum = true
        decimal = false
        console.log(enterSnum);
        op = num
        input.innerText = fNum + op
    }
}

const operation = () => {
    if(op == '+'){
        res = parseFloat(fNum) + parseFloat(sNum) 
    }
    if(op == '-'){
        res = parseFloat(fNum) - parseFloat(sNum) 
    }
    if(op == '*'){
        res = parseFloat(fNum) * parseFloat(sNum) 
    }
    if(op == '/'){
        res = parseFloat(fNum) / parseFloat(sNum) 
    }
    if(op == '%'){
        res = parseFloat(fNum) % parseFloat(sNum) 
    }
}

const display = (e) => {
    if(e.target.innerText != '=' && e.target.innerText != 'del'){
        displayText = displayText + e.target.innerText
        input.innerText = displayText
    }
}

boxes.forEach((box) => {
    box.addEventListener('click' , (e) => {
        enterValue(e)
        //display(e)
    } )
})
