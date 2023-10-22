import type { Meta, StoryObj } from '@storybook/react';
import { StepsBlock } from 'shared';

const meta: Meta<typeof StepsBlock> = {
  component: StepsBlock,
};

export default meta;
type Story = StoryObj<typeof StepsBlock>;

export const Primary: Story = {
  render: () => (
    <div className="bg-black-4">
      <StepsBlock />
    </div>
  ),
};
