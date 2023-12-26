import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    loading: false,
    variant: 'primary'
  },
  argTypes: {
    loading: {
      defaultValue: false,
      type: 'boolean'
    }
  },
  parameters: {
    controls: {
      exclude: 'variant'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  parameters: {},
  render: ({ loading }) => (
    <div
      style={{
        maxWidth: '200px'
      }}
    >
      <Button variant={Button.variants.primary} loading={loading}>
        Click me!
      </Button>
    </div>
  )
};

export const Outline: Story = {
  render: ({ loading }) => (
    <div
      style={{
        maxWidth: '200px'
      }}
    >
      <Button variant={Button.variants.outline} loading={loading}>
        Click me!
      </Button>
    </div>
  )
};
