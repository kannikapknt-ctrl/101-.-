
function showName() {

    let name = document.getElementById("nameInput").value.trim();

    let i = 0;
    let output = "";

    if (name === "") {
        document.getElementById("result").innerHTML =
            "กรุณากรอกชื่อ";
        return;
    }

    while (i < name.length) {

        output += name[i] + "!<br>";

        i++;
    }

    document.getElementById("result").innerHTML = output;
}
