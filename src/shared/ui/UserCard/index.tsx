import { FC } from 'react';
import { Avatar, Divider, Button, Title, SmallText } from 'shared';

type Props = {
  avatar?: string;
  title: string;
  description: string;
};

export const UserCard: FC<Props> = ({ avatar = '', title, description }) => {
  return (
    <div className="p-6 bg-black-1 border-radius rounded-40 max-w-xs text-white">
      <Avatar className="mb-5" avatar={avatar} size={219} />
      <Title className="text-center mb-4">{title}</Title>
      <Divider width={154} height={1} className="bg-gray-1 m-auto mb-5" />
      <SmallText className="mb-9">{description}</SmallText>
      <Button className="flex m-auto">TRY IT NOW</Button>
    </div>
  );
};
