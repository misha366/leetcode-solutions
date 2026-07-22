function countStudents(students: number[], sandwiches: number[]): number {

    let [ zeroStudents, oneStudens ] = students.reduce(
        ( [ zeroStudents, oneStudens ], c) => c === 0 ? [ zeroStudents + 1, oneStudens ] : [ zeroStudents, oneStudens + 1 ],
        [0, 0] 
    );

    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i] === 1) {
            if (oneStudens > 0) {
                oneStudens--;
            } else {
                return zeroStudents;
            }
        }
        if (sandwiches[i] === 0) {
            if (zeroStudents > 0) {
                zeroStudents--;
            } else {
                return oneStudens;
            }
        }
    }
        
    return 0;
};