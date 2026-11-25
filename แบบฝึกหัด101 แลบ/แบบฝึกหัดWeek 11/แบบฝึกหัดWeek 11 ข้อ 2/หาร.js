function calculate() {

    let n = Number(document.getElementById("n").value);
    let m = Number(document.getElementById("m").value);

    let even = 0;
    let odd = 0;

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

        if (i % 2 == 0) {
            even = even + i;
        } else {
            odd = odd + i;
        }

    }

    document.getElementById("result").innerHTML =
        "ผลรวมเลขคู่ = " + even + "<br>" +
        "ผลรวมเลขคี่ = " + odd;
}
