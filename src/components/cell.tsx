import type { ReactNode } from "react";


export default function Cell({num}: {num:ReactNode}){
    const className = 'border-2 border-gray-800 aspect-square rounded-md font-mono font-bold transition-all duration-100 text-2xl sm:text-3xl';
    if (num === 0) {
        return <button disabled className={`${className} border-dashed bg-transparent`}> </button>
    }
    return <button className={`${className} bg-gray-100 hover:bg-gray-200`}>{num}</button>
    
}