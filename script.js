let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

maxValue > 999 ? maxValue = 999 : maxValue === maxValue 
minValue < -999 ? minValue = -999 : minValue === minValue

if (minValue == false || minValue == "" ) {
    Number.isNaN(minValue)
    minValue === NaN ? minValue = -999 : minValue === minValue
} else if (maxValue == false || maxValue == "" ) {
    Number.isNaN(maxValue)
    maxValue === NaN ? maxValue = 999 : maxValue === maxValue 
}

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
text();

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = -999;
    maxValue = 999;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;          
            text();

        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            text();
        }
    }
})
function text () {
    let text;
    const phraseRandom = Math.round(Math.random()*2);
    if (phraseRandom === 0) {
        text = `Вы загадали число ${numWord(answerNumber)}?`;
    } 
    else if (phraseRandom === 1) {
        text = `Наверное, это число ${numWord(answerNumber)}?`;
    }
    else if (phraseRandom === 2) {
        text = `Возможно Вы загадали ${numWord(answerNumber)}?`;
    }
    answerField.innerText = text;
        }

function text1 () {
    let text1;
    const phraseRandom = Math.round(Math.random()*2);
    if (phraseRandom === 0) {
        text1 = `Да ты счастливчик ${numWord(answerNumber)}?`;
    } 
    else if (phraseRandom === 1) {
        text1 = `Угадал! Это число ${numWord(answerNumber)}?`;
    }
    else if (phraseRandom === 2) {
        text1 = `Да это же легко! Ты загадал ${numWord(answerNumber)}?`;
    }
    answerField.innerText = text1;
}
    
document.getElementById('btnRetry').addEventListener('click', function () {

            minValue = -999;
            maxValue = 999;
            operation = null;   
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            let orderNumber = 1;
            let gameRun = true;
    
            if (gameRun) {   
                answerField.innerText = `Вы загадали число ${answerNumber }?` 
                let btnRetry = gameRun;
                document.getElementById('btnOver').addEventListener('click', function () {
                if (gameRun){
                    if (minValue === maxValue){
                        const phraseRandom = Math.round( Math.random());
                        const answerPhrase = (phraseRandom === 0) ?
                            `Вы загадали неправильное число!\n\u{1F914}` :
                            `Я сдаюсь..\n\u{1F92F}`;
            
                        answerField.innerText = answerPhrase;
                        gameRun = false;
                    } else {
                        minValue = answerNumber + 1;
                        answerNumber = Math.floor((minValue + maxValue) / 2);
                        orderNumber++;
                        orderNumberField.innerText = orderNumber;  
                        text();
                    }
                    
                }
            })
            
            document.getElementById('btnLess').addEventListener('click', function () {
                if (gameRun){
                    if (maxValue === minValue){
                        const phraseRandom = Math.round( Math.random());
                        const answerPhrase = (phraseRandom === 0) ?
                            `Вы загадали неправильное число!\n\u{1F914}` :
                            `Я сдаюсь..\n\u{1F92F}`;
            
                        answerField.innerText = answerPhrase;
                        gameRun = false;
                    } else {
                        maxValue = answerNumber - 1;
                        answerNumber = Math.floor((maxValue + minValue) / 2);
                        orderNumber++;
                        orderNumberField.innerText = orderNumber;
                        text();
                    }
                }
            })   
            text();     
        }
        else {
            gameRun = false;    
        }
    
        document.getElementById('btnEqual').addEventListener('click', function () {
            if (gameRun){
                text1 ();
                gameRun = false;  
                  
            }
        })
    })
    

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        text1 ();
        gameRun = false;
    }
})

let numArr = [];
numArr [1] = new Array("", "один", "два", "три",  "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять", "одиннадцать", "двенадцать", 
"тринадцать", "четырнадцать", "пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать");
numArr [2] = new Array("", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто");
numArr [3] = new Array("", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот");

function numWord(number) {
    let str;
    if (number === 0) {
       return 0
    }
    else if (number >= 0 && number < 100) {
        str = numWord1_99(number)
    }
    else if (number <= 0 && number > -100) {
        str = numWord_1_99(number)
    }
    else if (number == 100) {
        str = numArr[3][1]
    }
    else if (number == -100) {
        str = myWord + numArr[3][1]
    }
    else if (number >= 101 && number <= 999) {
        let number0_99 = number % 100;
        str = numArr[3][Math.floor(number/100)] + " " + numWord1_99(number0_99)
    }
    else if (number <= -101 && number >= -999) {
        let number_0_99 = number % 100;
        str = myWord + " " + numArr[3][Math.floor(-number/100)] + " " + numWord_1_99(number_0_99)
    }
    if (str.length > 20) {
        return number
    } 
    return str    
}

let myWord = "минус";
function numWord1_20(number) {
    return numArr[1][number]
}
function numWord_1_20(number) {   
    return myWord + numArr[1][number]
}
function numWord20_99(number) {
    return numArr[2][Math.floor(number/10)] + " " + numArr[1] [number % 10]
}
function numWord_20_99(number) {
    return numArr[2][Math.floor(number/10)] + " " + numArr[1] [number % 10]
}
function numWord1_99(number) {
    if (number === 0) {
        return ""
    }
    else if (number > 0 && number < 20) {
        return numWord1_20(number)
    }
    else if (number >= 20 && number <= 99) {
        return numWord20_99(number)
    }
}
function numWord_1_99(number) {
    if (number === -0) {
        return ""
    }
    else if (number < 0 && number > -20) {
        return numWord_1_20(-number)
    }
    else if (number <= -20 && number >= -99) {        
        return numWord_20_99(-number)
    }
    
}
