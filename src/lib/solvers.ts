import { moveCells } from "./utils";

const targetBoard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export function bfsSolver(initialBoard: number[]){
    //console.log("Initial board: ", initialBoard);
    //console.log("Movable indices: ", movableIndices(initialBoard));
    const queue: number[][] = [initialBoard];
    const visited = new Set<string>();
    const parent = new Map<string, { state:number[],moveIndex: number}>();

    visited.add(JSON.stringify(initialBoard));
    //console.log(queue);

    while(queue.length > 0) {
        const currentBoard = queue.shift()!;

        if (isCompleted(currentBoard)){
            //console.log("is completed", currentBoard);
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

export function dfsSolver(){
    return;
}

export function aStarSolver(){
    return;
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