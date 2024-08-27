module.exports = {
  '*.md': ['prettier --write'],
  'package.json': ['npm run format:package'],
  'src/**/*.{ts,json}': ['prettier --write', 'eslint --fix'],
  'src/**/*.ts': [() => 'npm run lint:ts'],
};
