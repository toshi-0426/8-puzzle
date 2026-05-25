import type { ReactNode } from 'react';

type CellProps = {
  value: number;
  index: number;
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Cell({
  value,
  index,
  children,
  onClick,
  disabled = false,
}: CellProps) {
  const className =
    'aspect-square border-[3px] border-[#0f380f] rounded-none font-mono font-bold text-2xl sm:text-3xl text-[#0f380f]';

  if (value === 0) {
    return (
      <button
        disabled
        value={index}
        onClick={onClick}
        className={`${className} border-dashed bg-[#8bac0f] opacity-70 shadow-none`}
      >
        {' '}
      </button>
    );
  }
  return (
    <button
      value={index}
      disabled={disabled}
      onClick={onClick}
      className={`${className} bg-[#e0f8cf] shadow-[3px_3px_0_#306230] hover:bg-[#d9ead3] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#306230]`}
    >
      {children}
    </button>
  );
}

export default Cell;
