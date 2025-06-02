import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function DarkModeToggle( ) {
    const [isDark, setIsDark] = useState(false)

    const handleClick = () => {
        setIsDark(!isDark);
    }
    return (
        
        <button onClick={handleClick} className="self-center">
            {!isDark && <Moon className="w-7 h-7" />}
            {isDark && <Sun className="w-7 h-7" />}    
        </button>
    )
}