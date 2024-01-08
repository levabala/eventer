import { mockDateDecorator } from 'storybook-mock-date-decorator';

export const decorators = [mockDateDecorator];

export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
