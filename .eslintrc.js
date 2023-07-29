module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ['tsconfig.json'],
        "extraFileExtensions": ['.vue'],
    },
    "plugins": [
        "vue",
    ],
    "rules": {
        "semi": 0,
        'no-console': 'off',
        'no-debugger': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-v-for-key': 'off',
        '@@typescript-eslint/restrict-plus-operands': 'off',
    },
    // parser: 'vue-eslint-parser',
}
