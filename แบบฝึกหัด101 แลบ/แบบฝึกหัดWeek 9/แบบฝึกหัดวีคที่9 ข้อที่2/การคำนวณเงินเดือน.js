
const salaryInput = document.getElementById('commisstion');
const btnCalculate = document.getElementById('btnCalculate');
const totalIncome = document.getElementById('totalIncome');
const pvdAmount = document.getElementById('pvdAmount');
const noteText = document.getElementById('noteText');

function calculatePVD(){
    // อ่านค่าของผู้่กรอก
    const salary = Number(salaryInput.value);

    // ตรวจสอบว่ากรอกถูกไหม
    if (salaryInput.value == "" || salary < 0){
        noteText.textContent = 'กรุณากรอกเงินเดือนให้ถูกต้อง';
        totalIncome.textContent = '0';
        pvdAmount.textContent = '0';
        return;
        }

    // คำนวน เงินเดือนเลี้ยงชีพ = เงินเดือน * 5%
    const pvd = salary * 0.05;
    
    // เเสดงผลหน้า display
    totalIncome.textContent = salary.toLocaleString();
    pvdAmount.textContent = pvd.toLocaleString();
    noteText.textContent = '';
}

// กดปุ่มเรียกฟังชั้นออกมา
btnCalculate.addEventListener('click', calculatePVD);