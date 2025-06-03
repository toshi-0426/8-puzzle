
// return true if the valid board, otherwise false
export function isCompleted(board: number[]): boolean {
    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    return board === answer;
}

export function isValidMove(board: number[], index: number){
    console.log(board, index);
    return true
}