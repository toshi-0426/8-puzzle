import { moveCells } from "./utils";

const targetBoard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export function bfsSolver(initialBoard: number[]): number[]{
    const queue: number[][] = [initialBoard];
    const visited = new Set<string>();
    const parent = new Map<string, { state:number[],moveIndex: number}>();

    visited.add(JSON.stringify(initialBoard));

    while(queue.length > 0) {
        const currentBoard = queue.shift()!;

        if (isCompleted(currentBoard)){
            return reconstructPath(parent);
        }
        
        const indices = movableIndices(currentBoard);
        for (const index of indices){
            const zi = zeroIndex(currentBoard);
            const newBoard = moveCells(currentBoard, index, zi);
            const newBoardStr = JSON.stringify(newBoard);

            if (!visited.has(newBoardStr)){
                visited.add(newBoardStr);
                const parentState = { state: currentBoard, moveIndex: index};
                parent.set(newBoardStr, parentState);
                queue.push(newBoard);
            }
        }
    }
    return [];
}


interface SearchNode {
    board: number[];
    g: number;
    h: number;
    f: number;
    path: number[];
}

// using Manhattan Distance
export function aStarSolver(initialBoard: number[]): number[]{
    console.log(initialBoard);
    const initialManhattanDistance = manhattanDistance(initialBoard);
    const searchQueue: SearchNode[] = [{
        board: initialBoard,
        g: 0,
        h: initialManhattanDistance,
        f: initialManhattanDistance,
        path: []
    }];

    const visited = new Set<string>();
    const gScore = new Map<string, number>();
    gScore.set(initialBoard.join(','), 0);

    while (searchQueue.length > 0){
        searchQueue.sort((a, b) => a.f - b.f);
        const currentQueue= searchQueue.shift()!;
        const currentKey = currentQueue.board.join('');

        if (isCompleted(currentQueue.board)){
            return currentQueue.path;
        }

        visited.add(currentKey);
        const zi = zeroIndex(currentQueue.board);

        for (const index of movableIndices(currentQueue.board)){
            const newBoard = moveCells(currentQueue.board, index, zi);
            const newKey = newBoard.join('');

            if (visited.has(newKey)){
                continue;
            }

            const tempG = currentQueue.g + 1;
            if (!gScore.has(newKey) || tempG < gScore.get(newKey)!){
                const distance = manhattanDistance(newBoard);
                gScore.set(newKey,tempG);
                const existingIndex = searchQueue.findIndex(node => (
                    node.board.join('')  === newKey
                ));
                if (existingIndex !== -1){
                    searchQueue.splice(existingIndex, 1);
                }
                searchQueue.push({
                    board: newBoard,
                    g: tempG,
                    h: distance,
                    f: tempG + distance,
                    path: [...currentQueue.path, index]
                })
            }
        }
    };
    return[]
}

export function greedySolver(){
    return;
}

function isCompleted(board: number[]) {
    return board.every((cell, index) => cell === targetBoard[index]);
}

function zeroIndex(board: number[]): number{
    return board.indexOf(0);
}


function isValidMove(zeroIndex:number, index:number):boolean {
    switch (zeroIndex) {
        case 0:
            return index === zeroIndex + 1 || index === zeroIndex + 3;
        case 1:
            return index === zeroIndex - 1 || index === zeroIndex + 1 || index === zeroIndex + 3;
        case 2:
            return index === zeroIndex - 1 || index === zeroIndex + 3;
        case 3:
            return index === zeroIndex - 3 || index === zeroIndex + 1 || index === zeroIndex + 3;
        case 4:
            return index === zeroIndex - 3 || index === zeroIndex - 1 || index === zeroIndex + 1 || index === zeroIndex + 3;
        case 5:
            return index === zeroIndex - 3 || index === zeroIndex - 1 || index === zeroIndex + 3;
        case 6:
            return index === zeroIndex - 3 || index === zeroIndex + 1;
        case 7:
            return index === zeroIndex - 3 || index === zeroIndex - 1 || index === zeroIndex + 1
        case 8:
            return index === zeroIndex - 3 || index === zeroIndex - 1;
        default:
            return false
    }
}


function movableIndices(board: number[]): number[] {
    const zi = zeroIndex(board)
    const indices: number[] = [];
    for (let i = 0; i < board.length; i++){
        if (i === zi) continue;
        if (isValidMove(zi, i)){
            indices.push(i);
        }
    }
    return indices;
}

function reconstructPath(parent: Map<string, { state:number[],moveIndex: number}>):number[]{
    const path: number[] = [];
    let currentBoardStr = JSON.stringify(targetBoard);

    while (parent.has(currentBoardStr)){
        const { state, moveIndex } = parent.get(currentBoardStr)!;
        path.unshift(moveIndex);
        currentBoardStr = JSON.stringify(state); 
    }
    return path;
};

function manhattanDistance(board: number[]): number {
    let distance = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 0) continue;
        const row = Math.floor(i / 3);
        const col = i % 3;
        const targetPos = board[i] - 1
        const targetRow = Math.floor(targetPos / 3);
        const targetCol = targetPos % 3;
        distance += Math.abs(row - targetRow) + Math.abs(col - targetCol);
    }
    return distance;
}
