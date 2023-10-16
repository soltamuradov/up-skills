import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Text: FC<Props> = ({ className, children }) => {
  return <div className={`text-xs font-normal ${className}`}>{children}</div>;
};
