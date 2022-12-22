import Input from '../../ui/Input/Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};
