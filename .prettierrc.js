module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@Tool/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
