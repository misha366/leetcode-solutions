function countStudents(students: number[], sandwiches: number[]): number {

    let [ zeroStudents, oneStudens ] = students.reduce(
        ( [ zeroStudents, oneStudens ], c) => c === 0 ? [ zeroStudents + 1, oneStudens ] : [ zeroStudents, oneStudens + 1 ],
        [0, 0] 
    );

    while (students.length !== 0) {
        if (sandwiches[0] === 0 && zeroStudents === 0) break;
        if (sandwiches[0] === 1 && oneStudens === 0) break;

        if (students[0] === sandwiches[0]) {
            if (students[0] === 0) zeroStudents--;
            else oneStudens--;

            students.shift()
            sandwiches.shift();
        } else {
            students.push(students.shift())
        }
    }

    return students.length;
};