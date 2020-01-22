const area = (a, b) => a * b;

const perimeter = (a, b) => 2 * (a + b)

const factorial = a => {
    return a === 0 || a === 1 ? 1 : a * factorial(a - 1)
}

const multiply = (a, b) => {
    return a * b
}
//function of fibannocci series before memoization
const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2))
//function with memoization time
const fib_ = n => {
    let s = []
    if (n <= 1) {
        return n
    }
    if (s[n] != undefined) {
        return s[n]
    } else {
        return fib_(n - 1) + fib_(n - 2)
    }
}
module.exports = { area, perimeter, factorial, multiply, fib, fib_ }