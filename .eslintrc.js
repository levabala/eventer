module.exports = {
    root: true,
    extends: [
        '@react-native',
        'eslint:recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:import/warnings',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'import/order': [
            'warn',
            { alphabetize: { order: 'asc', caseInsensitive: true } },
        ],
        'import/no-unresolved': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/consistent-type-imports': 'warn',
        'no-void': 'off',
        '@typescript-eslint/no-floating-promises': [
            'warn',
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
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
};
