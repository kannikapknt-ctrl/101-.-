

function calculate() {

    let n = Number(document.getElementById("n").value);
    let m = Number(document.getElementById("m").value);

    let sum = 0;
    let count = 0;

    if (document.getElementById("n").value === "" ||
        document.getElementById("m").value === "") {
        document.getElementById("result").innerHTML = "กรุณากรอกตัวเลข";
        return;
    }

    if (n > m) {
        document.getElementById("result").innerHTML = "ค่า n ต้องไม่มากกว่า m";
        return;
    }

    for (let i = n; i <= m; i++) {
        sum = sum + i;
        count++;
    }

    let average = sum / count;

    document.getElementById("result").innerHTML =
        "ผลรวม = " + sum + "<br>" +
        "ค่าเฉลี่ย = " + average.toFixed(2);
}
