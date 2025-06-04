import { useState } from "react";
import { getInitialBoard } from "../lib/puzzle-patterns";
import Cell from "./Cell";
import Button from "./Button";
import MoveCount from "./MoveCount";
//import Button from "./Button";

export default function SolverBoard() {
    const [board, setBoard] = useState<number[]>(() => getInitialBoard());
    const [count, setCount] = useState<number>(0);
    
    const handleNewGame = () => {
        setBoard(getInitialBoard());
    }

    const handle = () => {
        return;
    }

    return (
        <div className="w-full max-w-md max-h-md aspect-square">
            <div className="flex items-center justify-between my-4 mx-10 text-gray-900 font-bold gap-x-4">
                <div className="flex items-center gap-3">
                    <select defaultValue="BFS">
                        <option value="BFS">BFS</option>
                        <option value="DFS">DFS</option>
                    </select>
                    <Button className="py-1 px-2" color="blue" onClick={handleNewGame}>Start</Button>
                </div>
                <MoveCount count={count}/>
            </div>

            <div className="relative">
                <div className="grid grid-cols-3 grid-rows-3 gap-1 p-3 border-2 border-gray-700 rounded bg-black/20">
                    {board.map((cell, i) => (
                        <Cell disabled={true} value={cell} key={i} index={i} onClick={handle}>{cell}</Cell>
                    ))}
                </div>
            </div>
            
            <div className="flex item-center my-4 justify-center w-full">
                <Button className="w-full py-3 px-4" color="red" onClick={handleNewGame}>New Game</Button>
            </div> 
        </div>
    )
}