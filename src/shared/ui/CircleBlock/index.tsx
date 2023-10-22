import { FC, ReactNode } from 'react';

type Props = {
  size?: number;
  className?: string;
  children?: ReactNode;
};

export const CircleBlock: FC<Props> = ({ size, className = '', children }) => {
  return (
    <div
      className={`rounded-full m-auto p-4 bg-black-2 ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
};
