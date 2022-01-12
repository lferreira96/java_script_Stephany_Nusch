function returnEvenValues(array){
    let evenNums = [];
    let evenNumsImpar = [];
    let cont=0;
    for(let i = 0; i<array.length; i++){
        if(array[i]% 2 ==0){
            evenNums.push(array[i]);
        } else {
            evenNumsImpar.push(array[i]);
            //cont++;
            //console.log(`${array[i]} não é par!`);
        }
    }
    console.log("Os números pares são: ", evenNums, " e os números ímpares são: ", evenNumsImpar);
}

let Array = [1,2,4,5,7,8];

returnEvenValues(Array);