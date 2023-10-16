import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const LargeText: FC<Props> = ({ className, children }) => {
  return <div className={` ${className}`}>{children}</div>;
};
