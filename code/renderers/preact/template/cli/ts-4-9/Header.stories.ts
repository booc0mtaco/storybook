import type { Meta, StoryObj } from '@storybook/preact';
import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/preact/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/preact/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    // @ts-expect-error TODO seems like props extraction in Story type is not correct
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};