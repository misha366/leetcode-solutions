function validTicTacToe(board: string[]): boolean {
    let countO = 0;
    let countX = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (const char of board[i]) {
            if (char === 'O') countO++;
            else if (char === 'X') countX++;
        }
    }

    if (countO > countX || countX - countO > 1) return false;

    const isWin = (char: string): boolean => {
        for (let i = 0; i < 3; i++) {
            // row
            if (board[i][0] === char && board[i][1] === char && board[i][2] === char) return true;
            // column
            if (board[0][i] === char && board[1][i] === char && board[2][i] === char) return true;
        }
        if (board[0][0] === char && board[1][1] === char && board[2][2] === char) return true;
        if (board[0][2] === char && board[1][1] === char && board[2][0] === char) return true;
        return false;
    };
    
    if (isWin('X') && countX !== countO + 1) return false;
    if (isWin('O') && countX !== countO) return false;

    return true;
};