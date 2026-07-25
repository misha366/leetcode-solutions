function climbStairs(n: number): number {
    if (n <= 2) return n;
    
    let prevprev = 1;
    let prev = 2

    for (let i = 3; i <= n; i++) {
        const current = prev + prevprev;
        prevprev = prev;
        prev = current;
    }

    return prev;
};