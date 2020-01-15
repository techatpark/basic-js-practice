const area = (a, b) => a * b;

const perimeter = (a, b) => 2 * (a + b);

const factorial = a => {
    return (a === 0 || a === 1) ? 1 : a * factorial(a - 1);
}

module.exports = { area, perimeter, factorial };