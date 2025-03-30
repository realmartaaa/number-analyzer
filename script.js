function isPrime(num) {
    if (num < 1 || num > 10) return false
    else return true
}

console.log(isPrime(5))
console.log(isPrime(11))

function isEven(num) {
    if (num % 2 === 0) return true
    else return false
}

console.log(isEven(52))
console.log(isEven(11))

function sumDigits(num) {
    let digits = String(num).split('')
    let sum = 0

    for (let digits of digits) {
        sum += Number(digits)
    }
    return sum
}

console.log(sumDigits(24))
console.log(sumDigits(11))