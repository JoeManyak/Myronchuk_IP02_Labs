function calcul() {
    let s1=0;
    let s2=0;
    for (let i = 1; i < 101; i++) {
        s1 += Math.pow(-1, i) * (1 / i);
        s2 += Math.pow(-1, i) * (1 / (101 - i));
    }
    console.log("s1:",s1,", s2:",s2);
    let res;
    let result;
    if (s1 > s2) {
        res = 1;
        result="s1 > s2";
    } else if (s2 > s1) {
        res = -1;
        result="s2 > s1";
    } else {
        res = 0;
        result="s1 == s2";
    }

    document.getElementById("result").innerText = result;
}
