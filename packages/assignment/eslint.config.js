import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  tseslint.config({
    ignores: ['dist'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // TypeScript 관련 규칙 추가
    ],
    files: ['**/*.{ts,tsx}'], // TypeScript 파일에만 적용
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: [
      'react-hooks',
      'react-refresh', // 플러그인은 배열로 설정
    ],
    rules: {
      ...reactHooks.configs.recommended.rules, // react-hooks 관련 규칙 추가
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'camelcase': ['error', { properties: 'always' }] // camelCase 규칙 추가
    },
  }),
];
