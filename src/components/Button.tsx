type ButtonProps = {
  className?: string;
  color: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const colorClasses: Record<string, string> = {
  red: 'bg-gradient-to-br from-red-500 to-red-600 border-red-900 text-gray-100',
  blue: 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-900 text-gray-100',
};

const colorDisabledClasses: Record<string, string> = {
  red: 'bg-gray-300 border-gray-400 text-gray-400',
  blue: 'bg-gray-300 border-gray-400 text-gray-400',
};

export default function Button({
  className = '',
  color,
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  const colorClassName =
    disabled === false
      ? colorClasses[color] || colorClasses['red']
      : colorDisabledClasses[color] || colorDisabledClasses['red'];
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${colorClassName} flex items-center justify-center  font-bold rounded transition-all duration-100 font-mono tracking-wide bg-gradient-to-br from-${color}-500 to-${color}-600 border-2 border-${color}-900`}
    >
      {children}
    </button>
  );
}
