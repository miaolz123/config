module.exports = {
  root: true,
  extends: 'standard',
  env: {
    'jquery': true,
    'browser': true,
  },
  plugins: [
    'html'
  ],
  'rules': {
    'arrow-parens': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': 0,
    'no-unused-vars': 1,
    'space-before-function-paren': 0,
  }
}
