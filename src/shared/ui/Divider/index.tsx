import { FC } from "react";

type Props = {
  className?: string;
  width?: number;
  height?: number;
};

export const Divider: FC<Props> = ({ className, width = 154, height = 1 }) => {
  return <div className={`w-[${width}px] h-[${height}px] ${className}`} />;
};
