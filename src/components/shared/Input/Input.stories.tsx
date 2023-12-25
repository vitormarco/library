import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    labelText: 'E-mail'
  },
  argTypes: {
    labelText: {
      defaultValue: 'E-mail',
      type: 'string'
    },
    hasError: {
      defaultValue: false,
      type: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: ({ labelText, hasError }) => (
    <div
      style={{
        maxWidth: '200px'
      }}
    >
      <Input labelText={labelText} hasError={hasError} />
    </div>
  )
};
