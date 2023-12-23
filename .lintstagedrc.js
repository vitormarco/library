const path = require('path');

const buildEslintCommand = (filename) => {
  const paths = filename.map((f) => path.relative(process.cwd(), f)).join(' ');

  return [
    `eslint ${paths} --ignore-path .gitignore --max-warnings=0`,
    `prettier --write ${paths} --log-level silent`,
    'tsc --project tsconfig.json --noEmit'
  ];
};

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand]
};
