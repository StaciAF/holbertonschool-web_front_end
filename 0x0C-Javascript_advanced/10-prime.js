let start = performance.now()

function countPrimeNumbers() {
    var primes = []
    for (let count = 2; count <= 100; count++) {
        if (count == 2 | count == 3 | count == 5 | count == 7) {
            primes.push(count)
        }
        else if (count % 2 == 0 | count % 3 == 0 | count % 5 == 0 | count % 7 == 0) {
            count++;
        }
        else {
            primes.push(count);
        }
    }
    return primes.length
};

for(let i = 0; i <= 100; i++) {
    countPrimeNumbers();
}

let end = performance.now()
console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.")
