import { FC } from "react";
import { CircleBlock } from "../CircleBlock";

type Props = {
  size?: number;
  className?: string;
  avatar?: string;
};

export const Avatar: FC<Props> = ({ size, className, avatar }) => {
  return (
    <CircleBlock className={className} size={size}>
      <img className="w-full" src={avatar} alt="" />
    </CircleBlock>
  );
};
