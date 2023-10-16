import { FC } from "react";
import { Avatar } from "../Avatar";
import { Divider } from "../Divider";
import Button from "../Button";
import { Title } from "../Title";
import { Text } from "../Text";

type Props = {
  avatar?: string;
  title: string;
  description: string;
};

export const UserCard: FC<Props> = ({ avatar, title, description }) => {
  return (
    <div className="p-6 bg-black-1 border-radius rounded-40 max-w-xs text-white">
      <Avatar className="mb-5" avatar={avatar} size={219} />
      <Title className="text-center mb-4">{title}</Title>
      <Divider width={154} height={1} className="bg-gray-1 m-auto mb-5" />
      <Text className="mb-9">{description}</Text>
      <Button className="flex m-auto">TRY IT NOW</Button>
    </div>
  );
};
