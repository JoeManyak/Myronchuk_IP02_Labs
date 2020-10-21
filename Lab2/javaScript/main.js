function check() {
    let res;
    let x = parseFloat(document.getElementById("inp1").value); //Зчитування міри кута а
    let y = parseFloat(document.getElementById("inp2").value); //Зчитування міри кута b
    if (Math.sqrt(x*x+y*y) <= 1 ){ // перевірка чи потрапляє в одиничне коло
        if (x >= 0) { // перевірка в яку півплощину попадає точка
            if (y >= 0) { //перевірка потрапляння в чверть
                res = y >= x //Так як результат це булева змінна, ми можемо записати це як такий вираз
            } else {
                res = y >= -x
            }
        } else {
            if (y > 0) {
                res = y < -x
            } else {
                res = y < x
            }
        }
    } else {
        res = false
    }
    document.getElementById("result").innerText = "Result: "+res.toString();
}
