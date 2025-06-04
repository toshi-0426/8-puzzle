type ButtonProps = {
    className?: string,
    color: string,
    onClick?: () => void;
    children: React.ReactNode
}

const colorClasses: Record<string, string> = {
  red:   "bg-gradient-to-br from-red-500 to-red-600 border-red-900",
  blue:  "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-900",
};

export default function Button({
    className='', color, children, onClick
}: ButtonProps) {
    const colorClassName = colorClasses[color] || colorClasses['red']
    return <button 
                onClick={onClick}
                className={`${className} ${colorClassName} text-gray-100 font-bold rounded transition-all duration-100 font-mono tracking-wide bg-gradient-to-br from-${color}-500 to-${color}-600 border-2 border-${color}-900`}>{children}</button>
}