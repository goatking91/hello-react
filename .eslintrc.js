module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,
    'no-console': 0,
    'no-alert': 0,
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
};
