import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

const Button: FC<Props> = ({ className, children }) => {
  return (
    <button
      className={`px-10 py-4 rounded-40 bg-gradient-to-r from-gray-2 to-gray-3 text-black-3 text-xs font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
