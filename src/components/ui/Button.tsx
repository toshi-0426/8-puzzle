type ButtonColor = 'red' | 'blue';

type ButtonProps = {
  className?: string;
  color: ButtonColor;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const colorClasses: Record<ButtonColor, string> = {
  red: 'bg-[#9b2226] border-[#0f380f] text-[#e0f8cf]',
  blue: 'bg-[#306230] border-[#0f380f] text-[#e0f8cf]',
};

const disabledClassName = 'bg-[#8b956d] border-[#306230] text-[#306230]';

function Button({
  className = '',
  color,
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  const colorClassName = disabled ? disabledClassName : colorClasses[color];
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${colorClassName} flex items-center justify-center border-[3px] font-mono font-bold uppercase tracking-wide
  shadow-[3px_3px_0_#0f380f] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#0f380f] disabled:shadow-none
  disabled:translate-x-0 disabled:translate-y-0 rounded-none cursor-pointer`}
    >
      {children}
    </button>
  );
}
export default Button;
