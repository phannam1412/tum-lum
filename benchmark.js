
let start = Date.now();
let result = 0;
for(let a=0;a < 100000000;a++) {
    result = result + 12345;
    result = result * 3;
    if(result > 1000000)
        result = result % 1000000;
    result = result / 2;
}
let end = Date.now();
console.log("execution time: " + (end - start) + "ms");
