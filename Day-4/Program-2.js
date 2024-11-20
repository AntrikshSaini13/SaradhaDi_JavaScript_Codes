let arrayOfPricesOfPrices  = [250,650,300,900,50];
let i = 0;
for(let val of arrayOfPricesOfPrices){
    let offer = val / 10;
    arrayOfPricesOfPrices[i] = arrayOfPricesOfPrices[i] - offer;
    console.log(`Value before offer = ${val}`);
    i++;
}
for(let val of arrayOfPricesOfPrices){
    console.log(`value after offer = ${val}`);
}

console.log(`Second way of Solution`)

for(let i = 0; i<arrayOfPricesOfPrices.length;i++){
    let offer = arrayOfPricesOfPrices[i] / 10;
    arrayOfPricesOfPrices[i] -= offer;
    console.log(`Value before offer = ${arrayOfPricesOfPrices[i]}`);
}