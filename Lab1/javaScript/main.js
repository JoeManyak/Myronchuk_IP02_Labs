function calculate() {
    let a = parseFloat(document.getElementById("inp1").value);
    let b = parseFloat(document.getElementById("inp2").value);
    let c = parseFloat(document.getElementById("inp3").value);
    let r = parseFloat(document.getElementById("inp4").value);
    if (a + b + c === 180) {
        let side1 = sideCalculate(a, r);
        let side2 = sideCalculate(b, r);
        let side3 = sideCalculate(c, r);
        document.getElementById("result").innerText = "Сторони трикутника рівні " + side1 + ", " + side2 + " і " + side3;
    } else {
        document.getElementById("result").innerText = "Сума кутів не рівна 180 :(";
    }
}

function sideCalculate(a, r) {
    console.log(r)
    console.log(Math.sin((toRadian(a))));
    return 2 * r * Math.sin((toRadian(a)));
}

function toRadian(angle) {
    return (angle * Math.PI) / 180;
}