function minimumPossibleSum(n: number, target: number): number {
    const N = BigInt(n);
    const TARGET = BigInt(target);

    const k = BigInt(Math.min(n, Math.floor(target / 2)));
    const m = N - k;

    const smallSum = k * (k + 1n) / 2n;
    const largeSum = m * TARGET + m * (m - 1n) / 2n;

    return Number((smallSum + largeSum) % BigInt(10 ** 9 + 7));
};