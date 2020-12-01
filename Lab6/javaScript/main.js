function calcul() {
    let a = parseFloat(document.getElementById("inp1").value); //Зчитування x
    let b = parseFloat(document.getElementById("inp2").value); //Зчитування e
    let n = parseFloat(document.getElementById("inp3").value); //Зчитування e
    let s1 = calculateArea(0, Math.PI, n, func1);
    let s2 = calculateArea(a, b, n, func2);
    document.getElementById("result").innerText = "Result: " + (s1 + s2);
}

function calculateArea(localA, localB, localN, func) {
    let h = (localB - localA) / localN;
    let s = 0;
    for (let i = 1; i <= localN; i++) {
        let xi = localA + i * h - h / 2;
        s += func(xi)
    }
    return s * h
}

function func1(x) {
    return Math.log(2 + Math.sin(x))
}

function func2(x) {
    return Math.pow(Math.atan(x), 2)
}