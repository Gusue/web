console.log("Code of prime numbers!")

function prime(n) {
    if (n <= 1) {
        return false;
    }


        for (let i = 2; i <=
            Math.sqrt(n); i++) {
                if (n % i ==0){                
            return false;
        }
    }
    return true;

}

function primeP(max) {
    for (let i = 2; i <= max; i++) {
        if (prime(i)) {
            console.log("|" + i + "|");
        }
    }
}

const max = 1000;
primeP(max)


