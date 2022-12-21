import NavigateButton from '../../components/NavigateButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'NavigateButton',
    component: NavigateButton,
} as ComponentMeta<typeof NavigateButton>;

const Template: ComponentStory<typeof NavigateButton> = (args) => <NavigateButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
