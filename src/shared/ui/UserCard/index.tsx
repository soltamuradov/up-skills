import { FC } from "react";
import { Avatar } from "../Avatar";
import { Divider } from "../Divider";
import Button from "../Button";

type Props = {
  avatar?: string;
  title: string;
  description: string;
};

export const UserCard: FC<Props> = ({ avatar, title, description }) => {
  return (
    <div className="p-[25px] bg-black-1 border-radius rounded-[40px] max-w-[310px] text-white">
      <Avatar className="mb-5" avatar={avatar} size={219} />
      <div className=" text-2xl font-bold text-center mb-[17px]">{title}</div>
      <Divider width={154} height={1} className="bg-gray-1 m-auto mb-5" />
      <div className="text-xs font-normal mb-9">{description}</div>
      <Button className="flex m-auto">TRY IT NOW</Button>
    </div>
  );
};
