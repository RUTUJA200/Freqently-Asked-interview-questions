

const arr = [1, 5,7,9,6,4,2,23,45,67,89,22,29,11,20]

function isPrime(n) {
    if(n === 1) {
        return false;
    } else if(n === 2) {
        return true;
    } else {
        for(let i = 2; i < n; i++) {
            if(n % i === 0) {
                return false;
            } 
        }
        return true;
    }
}

const filterPrime = arr => arr.filter(item => isPrime(item));

 console.log(filterPrime(arr));

