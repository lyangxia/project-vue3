module.exports = {
    // 指定使用 vue-eslint-parser 作为解析器
    parser: 'vue-eslint-parser',
    // 这个对象包含了传递给解析器的选项
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],

    rules: {
        // override/add rules settings here, such as:
    }
};

