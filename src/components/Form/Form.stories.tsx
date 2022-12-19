import Form from './Form';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template:ComponentStory<typeof Form> = (args) => <Form {...args} />;
