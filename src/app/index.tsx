import { FC } from 'react';
import { ConnectionBlock, StepsBlock, UserCard } from 'shared';
import avatar1 from '../img/avatar-1.jpg';

const App: FC = () => {
  return (
    <div className="flex flex-col gap-y-10  bg-black-4">
      <UserCard
        avatar={avatar1}
        title="SIMULATION"
        description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
      />
      <ConnectionBlock />
      <StepsBlock />
    </div>
  );
};

export default App;
