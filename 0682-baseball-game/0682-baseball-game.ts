/*
  ops = ["5","2","C","D","+"]
  rec = []

  1 "5" - else branch
  rec = [5]
  2 "2" - else branch
  rec = [5, 2]
  3 "C" - else branch
  rec = [5]
  4 "D" - else branch
  rec = [5, 10]
  5 "+" - else branch
  rec = [5, 10, 15]

  5 + 10 + 15 = 30

*/ 

function calPoints(operations: string[]): number {
    const rec = [];

    for (const operation of operations) {
        if (operation === '+') {
            rec.push(rec.at(-1) + rec.at(-2));
        } else if (operation === 'D') {
            rec.push(rec.at(-1) * 2);
        } else if (operation === 'C') {
            rec.pop();
        } else {
            rec.push(Number(operation));
        }
    }
    
    return rec.reduce((acc, cur) => acc += cur, 0);
};