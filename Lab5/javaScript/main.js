function check() {
   let count = 0;
   for (let i=1000;i<10000;i++){
            if (i%101 === 0){
                count++;
                console.log(count,": ",i);
            }
   }
    document.getElementById("result").innerText = "Кількість шуканих чисел: "+count;
}