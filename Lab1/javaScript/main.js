function calculate() {
    let a = parseFloat(document.getElementById("inp1").value); //Зчитування міри кута а
    let b = parseFloat(document.getElementById("inp2").value); //Зчитування міри кута b
    let c = parseFloat(document.getElementById("inp3").value); //Зчитування міри кута c
    let r = parseFloat(document.getElementById("inp4").value); //Зчитування міри радіуса вписаного кола
    if (a + b + c === 180) { //перевірка існування трикутника
        let side1 = sideCalculate(a, r);
        let side2 = sideCalculate(b, r);
        let side3 = sideCalculate(c, r);
        document.getElementById("result").innerText = "Сторони трикутника рівні " + side1 + ", " + side2 + " і " + side3;
    } else {
        document.getElementById("result").innerText = "Сума кутів не рівна 180 :(";
    }
}

function sideCalculate(a, r) { // Функція розрахунку сторони за радіусом вписаного кола та кутом (т. синусів)
    return 2 * r * Math.sin((toRadian(a)));
}

function toRadian(angle) { // Функція переведення в радіани
    return (angle * Math.PI) / 180;
}