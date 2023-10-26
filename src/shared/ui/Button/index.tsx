import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: FC<Props> = ({
  className,
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-10 py-4 rounded-40 bg-gradient-to-r from-gray-2 to-gray-3 text-black-3 text-xs font-bold ${className}`}
    >
      {children}
    </button>
  );
};
