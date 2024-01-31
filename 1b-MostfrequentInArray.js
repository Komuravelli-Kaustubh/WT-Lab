const myArray=[1,2,4,2,1,5,1,6,1,8,3];

if(myArray === null){
    console.log("Empty array");
}

let mostFreq = 0;
let rep=0;
let maxRep=1;

for(let i=0;i<myArray.length-1;i++){
    for(let j=i;j<myArray.length;j++){
        if(myArray[i] === myArray[j]){
            rep++;
            if(rep>maxRep){
                maxRep=rep;
                mostFreq = myArray[i];
            }
        }
    }
    rep=0;
}

console.log("The most repeated element is: "+mostFreq+" repeated "+maxRep+" times.");