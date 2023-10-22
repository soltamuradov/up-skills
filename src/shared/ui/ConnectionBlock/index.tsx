import { FC } from 'react';
import { CallIcon, LocationIcon, SmsIcon } from 'shared/icons';
import { Title } from '../Title';
import { Text } from '../Text';
import { Divider } from '../Divider';

type Props = {
  className?: string;
};

export const ConnectionBlock: FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex max-h-44 justify-between max-w-screen-xl rounded-full p-10 gradient-radial text-white ${className}`}
    >
      <div className="flex items-center">
        <div className="mr-6">
          <LocationIcon />
        </div>
        <div>
          <Title className="mb-2">Pay Us a Visit</Title>
          <Text>Union St, Seattle, WA 98101, United States</Text>
        </div>
      </div>
      <Divider width={1.5} height={116} className="bg-gray-1" />
      <div className="flex items-center">
        <div className="mr-6">
          <CallIcon />
        </div>
        <div>
          <Title className="mb-2">Give Us a Call</Title>
          <Text>(110) 1111-1010</Text>
        </div>
      </div>
      <Divider width={1.5} height={116} className="bg-gray-1" />
      <div className="flex items-center">
        <div className="mr-6">
          <SmsIcon />
        </div>
        <div>
          <Title className="mb-2">Send Us a Message</Title>
          <Text>Contact@HydraVTech.com</Text>
        </div>
      </div>
    </div>
  );
};
