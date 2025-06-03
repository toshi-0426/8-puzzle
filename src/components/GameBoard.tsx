import { useState } from "react";
import { getInitialBoard } from "../lib/puzzle-patterns";
import Cell from "./cell";
import Timer from "./Timer";
import MoveCount from "./MoveCount";
import Button from "./button";


export default function GameBoard() {
    //const initialBoard = getInitialBoard();
    const [board, setBoard] = useState(() => getInitialBoard());
    console.log(board);

    const handleNewGame = () => {
        setBoard(getInitialBoard());
    }

    return (
        <div className="container w-full max-w-md max-h-md aspect-square">
            <div className="flex items-center justify-between my-4 mx-10 text-gray-900 font-bold gap-x-4">
                <MoveCount />
                <Timer />
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-1 p-3 border-2 border-gray-700 rounded bg-black/20">
                {board.map((cell, i) => (
                    <Cell num={cell} key={i}/>
                ))}
            </div>
            <div className="flex item-center my-4 justify-center w-full">
                <Button onClick={handleNewGame}>New Game</Button>
            </div> 
        </div>
    )
}