import { FC } from "react";

type Props = {
  className?: string;
  component: () => JSX.Element;
};

export const Icon: FC<Props> = ({ className = "", component }) => {
  return <div className={className}>{component()}</div>;
};
