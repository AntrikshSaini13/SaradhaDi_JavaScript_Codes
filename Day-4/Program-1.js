let arrayOfMarks = [57,78,98,45,74];
let sum = 0;
for(let val of arrayOfMarks){
    sum+=val;
}
let avg = sum/arrayOfMarks.length;

console.log("Average of Marks Of Student is : ",avg);