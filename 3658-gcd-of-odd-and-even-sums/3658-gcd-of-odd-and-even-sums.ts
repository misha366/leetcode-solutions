function gcdOfOddEvenSums(n: number): number {
    // S = ma + dm(m-1)/2
    const sumOdd = n + 2 * n * (n - 1) / 2;
    const sumEven = 2 * n + 2 * n * (n - 1) / 2;

    return Math.max(sumOdd, sumEven) - Math.min(sumOdd, sumEven);
};