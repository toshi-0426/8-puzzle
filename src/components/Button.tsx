
type ButtonProps = {
    className?: string,
    onClick?: () => void;
    children: React.ReactNode
}
export default function Button({
    className='', children, onClick
}: ButtonProps) {
    return <button 
                onClick={onClick}
                className={`${className} w-full text-gray-100 font-bold py-3 px-4 rounded transition-all duration-100 font-mono tracking-wide bg-gradient-to-br from-red-500 to-red-600 border-2 border-red-900`}>{children}</button>
}