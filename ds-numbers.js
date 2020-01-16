const fib = n => {
    let F = -1;
    F[0] = 0, F[1] = 1;
    if (n <= 1) {
        return n;
    }

    else if (F(n) != -1) {
        return fib(n);
    }
    return fib(n - 1) + fib(n - 2);
}

export default { fib };