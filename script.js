let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let Number;

maxValue > 999 ? maxValue = 999 : maxValue === maxValue 
minValue < -999 ? minValue = -999 : minValue === minValue

if (minValue == false || minValue == "" ) {
    Number.isNaN(minValue)
    minValue === NaN ? minValue = -999 : minValue === minValue
} else if (maxValue == false || maxValue == "" ) {
    Number.isNaN(maxValue)
    maxValue === NaN ? maxValue = 999 : maxValue === maxValue 
}
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`; 
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
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;  
            //const phraseRandom = Math.round(Math.random()*3);
                // if (phraseRandom === 1) {
                //     return `Вы загадали число ${answerNumber}?`;
                // } 
                // else if (phraseRandom === 2) {
                //     return `Наверное, это число ${answerNumber}?`;
                // }
                // else if (phraseRandom === 3) {
                //     return `Да это легко! Ты загадал ${answerNumber}?`;
                // }
        }                           
        }
    }
)

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
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;                                  
        } 
        
    }}
)

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;  
          
    }
})

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
        minValue = 0;
        maxValue = 100;
        operation = null;   
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
                    minValue = answerNumber  + 1;
                    answerNumber  = Math.floor((minValue + maxValue) / 2);
                    orderNumber++;
                    orderNumberField.innerText = orderNumber;
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
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
                    maxValue = answerNumber  - 1;
                    answerNumber  = Math.floor((maxValue + minValue) / 2);
                    orderNumber++;
                    orderNumberField.innerText = orderNumber;
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                }
            }
        })        
    }
    else {
        gameRun = false;    
    }

    document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun){
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
            gameRun = false;  
              
        }
    })
})
