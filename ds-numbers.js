const fib_ = n => {
    let F = -1;
    F[0] = 0, F[1] = 1;
    if (n <= 1) {
        return n;
    }

    else if (F[n] != -1) {
        return fib_(n);
    }
    return fib_(n - 1) + fib_(n - 2);
}
// without memoizztion
const fib =n => n<=1?n:fib(n-1)+fib(n-2);

export default { fib };

