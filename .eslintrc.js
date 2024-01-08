module.exports = {
    root: true,
    extends: [
        '@react-native',
        'eslint:recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/strict-type-checked',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        'no-void': 'off',
        '@typescript-eslint/no-floating-promises': [
            'error',
            { ignoreVoid: true },
        ],
    },
    ignorePatterns: ['.eslintrc.js', 'metro.config.js', '**/*.gen.*'],
    overrides: [
        {
            files: ['src/**/*.stories.ts*'],
            rules: {
                'react-hooks/rules-of-hooks': 'off',
            },
        },
    ],
};
