export type ThemeExtended = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: {
            primary: string;
            secondary: string;
        };
        border: string;
        notification: string;
    };
    opacities: {
        faded: number;
    };
    spacing: (value: number) => number;
};

const spacing = (value: number) => value * 8;

export const ThemeLight: ThemeExtended = {
    dark: false,
    colors: {
        primary: '#B9B6B6',
        background: 'white',
        card: '#EBEBEB',
        text: {
            primary: '#000000',
            secondary: 'rgba(0, 0, 0, 0.5)',
        },
        border: '',
        notification: '',
    },
    opacities: {
        faded: 0.5,
    },
    spacing,
};

export const ThemeDark: ThemeExtended = {
    dark: true,
    // TODO: adjust colors
    colors: {
        primary: '#B9B6B6',
        background: '#EBEBEB',
        card: '',
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
        border: '',
        notification: '',
    },
    opacities: {
        faded: 0.5,
    },
    spacing,
};

declare module '@react-navigation/native' {
    export function useTheme(): ThemeExtended;
}
