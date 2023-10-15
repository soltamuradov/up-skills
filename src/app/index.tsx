import { FC } from "react";
import { UserCard } from "shared";
import avatar1 from "../img/avatar-1.jpg";

const App: FC = () => {
  return (
    <div>
      <UserCard
        avatar={avatar1}
        title="SIMULATION"
        description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
      />
    </div>
  );
};

export default App;
