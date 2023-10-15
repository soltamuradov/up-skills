import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "../shared/ui/UserCard";
import avatar1 from "../img/avatar-1.jpg";

const meta: Meta<typeof UserCard> = {
  component: UserCard,
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
  render: () => (
    <UserCard
      avatar={avatar1}
      title="SIMULATION"
      description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
    />
  ),
};
