import type { ReactNode } from 'react';

type CellProps = {
  value: number;
  index: number;
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Cell({
  value,
  index,
  children,
  onClick,
  disabled = false,
}: CellProps) {
  const className =
    'border-2 border-gray-800 aspect-square rounded-md font-mono font-bold transition-all duration-100 text-2xl sm:text-3xl';
  if (value === 0) {
    return (
      <button
        disabled
        value={index}
        onClick={onClick}
        className={`${className} border-dashed bg-transparent`}
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
      className={`${className} bg-gray-100 hover:bg-gray-200`}
    >
      {children}
    </button>
  );
}
