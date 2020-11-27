function check() {
    let count = 0;
    for (let i=10;i<100;i++){
        console.log(count,": ",i*101);
        count++;
    }
    document.getElementById("result").innerText = "Кількість шуканих чисел: "+count;
}