import { FC } from 'react';
import { ArrowRightIcon, CircleBlock, Icon, Title } from 'shared';

type Props = {
  step: string;
  title?: string;
  className?: string;
};

export const Step: FC<Props> = ({ step, title = '', className = '' }) => {
  return (
    <div className={className}>
      <CircleBlock size={200} className="mb-6">
        <div className="w-full h-full rounded-full flex justify-center items-center text-6xl text-black-3 font-bold bg-gradient-to-r from-gray-2 to-gray-3">
          {step}
        </div>
      </CircleBlock>
      {title && (
        <div className="w-64 text-center flex items-center">
          <Icon className="inline-block" component={ArrowRightIcon} />
          <Title className=" text-left">{title}</Title>
        </div>
      )}
    </div>
  );
};
