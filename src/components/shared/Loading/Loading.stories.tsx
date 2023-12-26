import { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  component: Loading,
  parameters: {
    controls: {
      exclude: /variant/
    }
  }
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  render: () => (
    <div
      style={{
        maxWidth: '200px'
      }}
    >
      <Loading variant="bouncing-dots" />
    </div>
  )
};
