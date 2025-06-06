export function isCompleted(board: number[]): boolean {
  const answer = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  return board.every((cell, index) => cell === answer[index]);
}

export function isValidMove(board: number[], index: number) {
  let zeroIndex = -1;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 0) {
      zeroIndex = i;
    }
  }
  let isValid = false;
  switch (zeroIndex) {
    case 0:
      isValid = index === zeroIndex + 1 || index === zeroIndex + 3;
      break;
    case 1:
      isValid =
        index === zeroIndex - 1 ||
        index === zeroIndex + 1 ||
        index === zeroIndex + 3;
      break;
    case 2:
      isValid = index === zeroIndex - 1 || index === zeroIndex + 3;
      break;
    case 3:
      isValid =
        index === zeroIndex - 3 ||
        index === zeroIndex + 1 ||
        index === zeroIndex + 3;
      break;
    case 4:
      isValid =
        index === zeroIndex - 3 ||
        index === zeroIndex - 1 ||
        index === zeroIndex + 1 ||
        index === zeroIndex + 3;
      break;
    case 5:
      isValid =
        index === zeroIndex - 3 ||
        index === zeroIndex - 1 ||
        index === zeroIndex + 3;
      break;
    case 6:
      isValid = index === zeroIndex - 3 || index === zeroIndex + 1;
      break;
    case 7:
      isValid =
        index === zeroIndex - 3 ||
        index === zeroIndex - 1 ||
        index === zeroIndex + 1;
      break;
    case 8:
      isValid = index === zeroIndex - 3 || index === zeroIndex - 1;
      break;
    default:
      break;
  }
  return {
    isValid: isValid,
    zeroIndex: zeroIndex,
  };
}

export function moveCellsWithoutZeroIndex(board: number[], index: number) {
  const zeroIndex = board.indexOf(0);
  const newBoard = [...board];
  newBoard[zeroIndex] = newBoard[index];
  newBoard[index] = 0;
  return newBoard;
}

export function moveCells(board: number[], index: number, zeroIndex: number) {
  const newBoard = [...board];
  newBoard[zeroIndex] = newBoard[index];
  newBoard[index] = 0;
  return newBoard;
}

export function secondsToMinsSecs(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, '0')}`;
}

export function findOptimalSolutionBFS(board: number[]) {
  console.log(board);
  return [];
}
