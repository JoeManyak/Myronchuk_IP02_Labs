function main() {
    let arr = readLineOfWords();
    console.log("Слова з рядка:");
    arr.forEach(el => {
        console.log(el);
    });
    let resArr = deleteOddsAndFindMax(arr);
    console.log("Результат:");
    resArr.forEach(el => {
        console.log(el)
    })
}

function deleteOddsAndFindMax(arr) {
    let resArr = [];
    let max = 0;
    let maxIndex;
    for (let i = 0; i < arr.length; i += 2) {
        resArr[Math.trunc(i / 2)] = arr[i];
        if (arr[i].length > max) {
            max = arr[i].length;
            maxIndex = i / 2;
        }
    }
    console.log("Найбільший елемент:");
    console.log(resArr[maxIndex]);
    return resArr
}

function readLineOfWords() {
    let str = document.getElementById("inp1").value;
    return str.split(" ")
}