import { FC } from 'react';
import { Step } from './ui/Step';

type Props = {
  className?: string;
};

export const StepsBlock: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`flex justify-between max-w-7xl text-white ${className}`}>
      <Step step="01" title="3D Conception & Design" />
      <Step step="02" title="Interaction Design" />
      <Step step="03" title="VR World User Testing" />
      <Step step="04" title="Hydra VR Deploy" />
    </div>
  );
};
