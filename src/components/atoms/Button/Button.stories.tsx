import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { getLabelFromChildren } from '../../../utils/children.ts';
import { Button } from './Button.tsx';
import { allModes } from '../../../../.storybook/modes.ts';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    chromatic: {
      modes: {
        light: allModes['light'],
        dark: allModes['dark'],
      },
    },
  },
  decorators: [
    (Story) => (
      <div id="story-root" style={{ padding: '1em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement, args }) => {
    const user = userEvent.setup();
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: getLabelFromChildren(args.children) });

    await user.hover(button);
    await user.click(button);

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
