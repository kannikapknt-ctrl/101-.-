
const dayInput = document.getElementById('dayNumber');
const checkBtn = document.getElementById('checkBtn');
const resultBox = document.getElementById('result');

function checkDay(){
    let num = Number(dayInput.value);
    let dayName ='';

    switch (num){
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'กรุณากรอกตัวเลข 1 - 7 เท่านั้น';    
    }

    if (dayName == 'กรุณากรอกตัวเลข 1 - 7 เท่านั้น'){
        resultBox.textContent = dayName;
    } else{
        resultBox.textContent = 'Day = ' + dayName;
    }
}

checkBtn.addEventListener('click', checkDay);