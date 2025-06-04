
export default function Header() {
    return (
        <div className="mt-10 flex items-center justify-center mx-20 ">
            <div className="text-center text-2xl sm:text-4xl font-mono font-bold text-gray-800 text-shadow-xl tracking-widest drop-shadow-[2px_2px_0px_#306230]">
                8-Puzzle
            </div>
            <div className="flex items-center">
                <button>
                    Game
                </button>
                <button>
                    Solver
                </button>
            </div>
        </div>
        
    )
}