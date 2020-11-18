function check() {
    let s, fact, dif, i;
    let x = parseFloat(document.getElementById("inp1").value); //Зчитування x
    let e = parseFloat(document.getElementById("inp2").value); //Зчитування e
    i = 1;
    s = 1;
    fact = 2;
    dif = (Math.pow(-1, i) * Math.pow(x, 2*i)) / fact;
    while (Math.abs(dif) > e){
        s += dif;
        i++;
        fact *= 2 * i * (2*i - 1);
        dif = ((-1^i) * (x^(2*i)))/fact;
    }
    document.getElementById("result").innerText = "s: "+s.toString();
}
