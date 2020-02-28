module.exports = {
  extends: './node_modules/@shyftplan/js-config/lint/.eslintrc.js',
  rules: {
    'import/extensions': [
      'error', 
      {
        'js': 'never',
        'ts': 'never',
        'tsx': 'never',
        'jsx': 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['ts'],
      },
    },
  },
};
