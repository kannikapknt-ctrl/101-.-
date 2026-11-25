// ข้อ 1
function bmi() {
    let w = document.getElementById("w").value;
    let h = document.getElementById("h").value;
    
    h = h / 100; // แปลงส่วนสูงเป็นเมตร
    let ans = w / (h * h); 
    
    document.getElementById("output1").innerHTML = "BMI = " + ans;
}

// ข้อ 2
function room() {
    let WaterUnit = document.getElementById("WaterUnit").value;
    let ElectUnit = document.getElementById("ElectUnit").value;
    let Minute = document.getElementById("Minute").value;
    
   
    let ans = (WaterUnit * 10) + (ElectUnit * 25) + (Minute * 5);
    
    document.getElementById("output2").innerHTML = "ค่าห้อง = " + ans + " บาท";
}

// ข้อ 3
function water() {
    let bottle = document.getElementById("bottle").value;
    
    let dozen = Math.floor(bottle / 12); // หาจำนวนโหล
    let remain = bottle % 12; // หาเศษขวด
    
    let price = (dozen * 100) + (remain * 10);
    let tax = price * 0.07;
    let total = price + tax;
    
    document.getElementById("output3").innerHTML = "ต้องจ่ายรวมภาษี = " + total + " บาท";
}

