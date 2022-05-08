module.exports = {
  semi: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  bracketSpacing: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  jsxBracketSameLine: true,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.json'],
      options: {
        singleQuote: false
      }
    },
    {
      files: ['*.yml'],
      options: {
        singleQuote: false
      }
    }
  ]
};
