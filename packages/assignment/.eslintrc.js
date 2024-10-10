module.exports = {
    rules: {
      'camelcase': ['error', { properties: 'always' }]
    },
    // Prettier와 ESLint 충돌 방지 설정
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended' // Prettier와 함께 사용할 경우 추가
    ]
  };
  