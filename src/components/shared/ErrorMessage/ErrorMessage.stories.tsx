import { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
  args: {
    message: 'Must be valid e-mail'
  },
  argTypes: {
    message: {
      defaultValue: 'Must be valid e-mail',
      type: 'string'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Primary: Story = {
  render: ({ message }) => (
    <div
      style={{
        maxWidth: '200px'
      }}
    >
      <ErrorMessage message={message} />
    </div>
  )
};
