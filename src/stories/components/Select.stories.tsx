import Select from '../../components/Select/Select';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {};
