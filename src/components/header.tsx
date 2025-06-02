import DarkModeToggle from "./dark-mode-toggle";

export default function Header() {
    return (
        <div className="mt-10 flex items-center justify-between mx-20">
            <div className="text-3xl text-blue-500 font-mono font-bold">8-Puzzle</div>
             <DarkModeToggle/>
        </div>
        
    )
}