import { useEffect, useState } from "react";
import { getInitialBoard } from "../lib/puzzle-patterns";
import Timer from "./Timer";
import MoveCount from "./MoveCount";
import { isCompleted, isValidMove, moveCells, secondsToMinsSecs } from "../lib/utils";
import SuccessToast from "./SuccessToast";
import Cell from "./Cell";
import Button from "./Button";


export default function GameBoard() {
    const [board, setBoard] = useState<number[]>(() => getInitialBoard());
    const [isSolved, setIsSolved] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [isStarting, setIsStarting] = useState<boolean>(false)
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        if (!isStarting || isSolved) return;
        

        const interval = setInterval(() => {
            setSeconds(prev => Math.min(prev + 1, 3599)); 
            }, 1000);
        return () => clearInterval(interval);
    }, [isStarting, isSolved])
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLInputElement;
        const index = Number(target.value);
       
        const { isValid, zeroIndex } = isValidMove(board, index);

        if (!isValid) return;
        setIsStarting(true);
        const newBoard = moveCells([...board], index, zeroIndex);
        setCount(count => count + 1);
        setBoard(newBoard);

        if (isCompleted(newBoard)) {
            setIsSolved(true);
            return;
        }
    };

    const handleNewGame = () => {
        setBoard(getInitialBoard());
        setIsSolved(false);
        setIsStarting(false);
        setSeconds(0);
        setCount(0);
    }

    const currentTime = secondsToMinsSecs(seconds);

    return (
        <div className="w-full max-w-md max-h-md aspect-square">
            <div className="flex items-center justify-between my-4 mx-10 text-gray-900 font-bold gap-x-4">
                <MoveCount count={count}/>
                <Timer currentTime={currentTime}/>
            </div>

            <div className="relative">
                <div className="grid grid-cols-3 grid-rows-3 gap-1 p-3 border-2 border-gray-700 rounded bg-black/20">
                    {board.map((cell, i) => (
                        <Cell disabled={isSolved} value={cell} key={i} index={i} onClick={handleClick}>{cell}</Cell>
                    ))}
                </div>
                {isSolved && <SuccessToast count={count} time={currentTime}/>}
            </div>
            
            <div className="flex item-center my-4 justify-center w-full">
                <Button className="w-full py-3 px-4" color="red" onClick={handleNewGame}>New Game</Button>
            </div> 
        </div>
    )
}