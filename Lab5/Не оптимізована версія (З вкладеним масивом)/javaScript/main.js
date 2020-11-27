function check() {
   let count = 0;
   for (let i=10;i<100;i++){
       for (let j=10;j<100;j++){
            if (i===j){
                count++;
                console.log(count,": ",i*100+j);
            }
       }
   }
    document.getElementById("result").innerText = "Кількість шуканих чисел: "+count;
}