function countStudents(students: number[], sandwiches: number[]): number {
    let oneStudents = 0;
    let zeroStudents = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i] === 1) oneStudents++;
        else zeroStudents++;
    }

    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i] === 0) {
            if (zeroStudents > 0) {
                zeroStudents--;
            } else {
                return oneStudents;
            }
        } else if (sandwiches[i] === 1) {
            if (oneStudents > 0) {
                oneStudents--;
            } else {
                return zeroStudents;
            }
        }
    }

    return 0;
};