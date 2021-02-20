function countPrimeNumbers() {
    let primeCount = 0
    let primeFlag = true;
    for(let i = 2; i <= 101; i++)
    {
        if(i == 2 || i == 3 || i == 5 || i == 7)
        {
            primeCount++
        }
        if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 )
        {
            primeFlag = false;
        }
        else {
            primeCount++
        }
    }
    return primeCount
};

let start = performance.now();
countPrimeNumbers();
let end = performance.now();
let lapsed = end - start
console.log("Execution time of printing countPrimeNumbers was " + lapsed + " milliseconds.")
