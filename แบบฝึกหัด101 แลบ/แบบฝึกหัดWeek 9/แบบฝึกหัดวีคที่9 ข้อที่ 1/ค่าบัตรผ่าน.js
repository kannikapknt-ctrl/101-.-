const heightInput = document.getElementById('height');
const result = document.getElementById('result');
const buttom = document.querySelector('button');

function calculate(){
    // อ่านค่าที่กรอก เเล้วเเปลงจากข้อความที่เป็นตัวเลข
    const height = Number(heightInput.value);

    // เช็คว่าถูกไหม
    if (height <= 0){
        result.textContent = 'กรุณากรอกส่วนสูงให้ถูกต้อง'
        return;
    }

    // เงื่อนไขในการเช็คส่วนสูง
    let price;
    if (height <= 130){
        price = 50;
    } 
    else {
        price = 100;
    }

    //เเสดงผลลัพใน display
    result.textContent = 'ส่วนสูง' + height + 'ซม. ค่าบัตรผ่านประตู' + price + 'บาท';
}

// เมื่อกดปุ่ม เรียกฟังชั้น calculate
buttom.addEventListener('click', calculate);