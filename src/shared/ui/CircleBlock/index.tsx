import { FC } from "react";

type Props = {
  size?: number;
  className?: string;
  children: JSX.Element;
};

export const CircleBlock: FC<Props> = ({ size, className, children }) => {
  return (
    <div
      className={`rounded-full w-[${size}px] m-auto p-4 bg-black-2 ${className}`}
    >
      {children}
    </div>
  );
};
