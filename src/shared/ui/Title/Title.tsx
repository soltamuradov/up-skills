import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Title: FC<Props> = ({ className, children }) => {
  return <h3 className={`text-2xl font-bold ${className}`}>{children}</h3>;
};
