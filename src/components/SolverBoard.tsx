import { useEffect } from "react";
import Cell from "./Cell";
import Button from "./Button";
import MoveCount from "./MoveCount";
import { useSolverBoardStore } from "../store/solverBoardStore";

export default function SolverBoard() {
    const {
        board,
        selectedAlgo,
        count, 
        path,
        isCalculating,
        isStarting,
        isSolved,
        newGame,
        changeAlgorithm,
        calculatePath,
        startAnimation,
        stopAnimation
    } = useSolverBoardStore();

    useEffect(() => {
        calculatePath();
    }, [calculatePath])

    useEffect(() => {
        return () => {
            stopAnimation();
        };
    }, [stopAnimation]);
    
    
    const handleStart = () => {
        console.log('start', selectedAlgo);
        console.log('initial board: ', board);
        console.log('Path: ', path);
        startAnimation();   
    }


    return (
        <div className="w-full max-w-md max-h-md aspect-square">
            <div className="flex items-center justify-between my-4 mx-10 text-gray-900 font-bold gap-x-4">
                <div className="flex items-center gap-3">
                    <select defaultValue="BFS" onChange={(e) => changeAlgorithm(e.target.value)}>
                        <option value="BFS">BFS</option>
                        <option value="A*">A*</option>
                    </select>
                    <Button disabled={isCalculating || isStarting || isSolved} className="py-1 px-2" color="blue" onClick={handleStart}>Start</Button>
                </div>
                <MoveCount count={count}/>
            </div>

            <div className="relative">
                <div className="grid grid-cols-3 grid-rows-3 gap-1 p-3 border-2 border-gray-700 rounded bg-black/20">
                    {board.map((cell, i) => (
                        <Cell disabled={true} value={cell} key={i} index={i} >{cell}</Cell>
                    ))}
                </div>
            </div>
            
            <div className="flex item-center my-4 justify-center w-full">
                <Button disabled={isStarting || isCalculating} className="w-full py-3 px-4" color="red" onClick={newGame}>New Game</Button>
            </div> 
        </div>
    )
}