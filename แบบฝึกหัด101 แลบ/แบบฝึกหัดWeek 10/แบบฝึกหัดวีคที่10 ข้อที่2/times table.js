window.onload = function(){
    let buttom = document.getElementById('generate-btn');
    buttom.onclick = showTable;
}

// ฟังชั่นหลัก: ทำงานเมื่อกดปุ่ม
function showTable(){
    let type = document.getElementById('loop-type').value; // while and do-while
    let output = document.getElementById('output');
    let text = '';
    let n = 2; //เริ่มที่เเม่ 2

    if (type === 'while'){
        // while: เช็ดเงื่อนไขก่อน เเล้วค่อยทำ
        while (n <= 12){
            text += makeTable(n);
            n++
        }
    } else{
        // do-while: ทำก่อน 1 รอบ เเล้วค่อยเช็คเงื่อนไข
        do{
            text += makeTable(n);
            n++
        } while (n <= 12);
    }
    output.innerHTML = text;
}

// ฟังก็ชั้นสร้างสูตรคูณของเเม่ n (คูณ 1 ถึง 12)
function makeTable(n){
    let result = '<h3>เเม่' + n + '</h3>';
    for (let i = 1; i <= 12; i++){
        result += n + 'x' + i + '=' + (n*i) + '<br>';
    }
    return result;
}