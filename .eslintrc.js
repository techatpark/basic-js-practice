module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
};
//adding a comment