import { Meta, StoryObj } from '@storybook/react';
import { ConnectionBlock } from 'shared';

const meta: Meta<typeof ConnectionBlock> = {
  component: ConnectionBlock,
};

export default meta;
type Story = StoryObj<typeof ConnectionBlock>;

export const Primary: Story = {
  render: () => <ConnectionBlock />,
};
