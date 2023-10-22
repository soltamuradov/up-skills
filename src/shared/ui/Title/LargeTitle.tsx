import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

export const LargeTitle: FC<Props> = ({ className, children }) => {
  return <h2 className={`${className}`}>{children}</h2>;
};
