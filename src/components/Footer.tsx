import { Github } from "lucide-react";

export default function Footer() {
    return <footer className="rounded-lg mt-4 flex justify-center">
        <div className="flex items-center text-gray-500 space-x-4">
            <div>&copy; 2025 Toshiyasu Takahashi</div>
            <a 
                href="https://github.com/toshi-0426/8-puzzle"
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline flex"
            >
                <Github className="text-black"/>
                source code
            </a>
        </div>
    </footer>
}