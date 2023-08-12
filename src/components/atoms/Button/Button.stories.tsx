import type { Meta, StoryObj } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { Button } from './Button.tsx';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);

    expect(button).toHaveFocus();
  },
};

export const Variant: StoryObj<typeof meta> = {
  parameters: {
    controls: { exclude: /^(?!.*(children))/g },
  },
  args: {
    children: 'Button',
  },
  render: ({ children }) => (
    <>
      <Button variant="primary">{children} primary</Button>
      <Button variant="secondary">{children} secondary</Button>
    </>
  ),
};

export const Size: StoryObj<typeof meta> = {
  parameters: {
    controls: { exclude: /^(?!.*(children))/g },
  },
  args: {
    children: 'Button',
  },
  render: ({ children }) => (
    <>
      <Button size="small">{children} small</Button>
      <Button size="normal">{children} normal</Button>
      <Button size="large">{children} large</Button>
    </>
  ),
};
