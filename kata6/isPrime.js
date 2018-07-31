function isPrime(num) {
    if (num === 1 || num === 0 || num < 0) {
        return false;
    }
    else {
        let prime = true;
        for (let i = 2; i < num; i++) {
            if (i != 1) {
                if (num % i === 0) {
                    prime = false;
                }
            }
        }
        return prime;
    }

}
isPrime(1);