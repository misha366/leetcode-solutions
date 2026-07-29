function calPoints(operations: string[]): number {
    let resTrack = [];
    let res = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            const n = resTrack[resTrack.length - 1] + resTrack[resTrack.length - 2];
            res += n;
            resTrack.push(n);
        }
        else if (operations[i] === 'D') {
            const n = resTrack[resTrack.length - 1] * 2;
            res += n;
            resTrack.push(n);
        }
        else if (operations[i] === 'C') {
            res -= resTrack.pop();
        }
        else {
            const n = +operations[i];
            res += n;
            resTrack.push(n);
        }
    }

    return res;
};