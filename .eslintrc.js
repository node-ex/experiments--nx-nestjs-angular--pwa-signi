'use strict';

module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  /* https://nx.dev/nx-api/eslint-plugin */
  plugins: ['@nx'],
  rules: {
    /*
     * ESLint rules: https://eslint.org/docs/latest/rules/
     * @typescript-eslint rules: https://typescript-eslint.io/rules/
     * Nx rules: https://nx.dev/nx-api/eslint-plugin/documents/overview
     */
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      /* https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/configs/typescript.ts */
      extends: ['plugin:@nx/typescript'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      /* https://github.com/nrwl/nx/blob/master/packages/eslint-plugin/src/configs/javascript.ts */
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {},
    },
  ],
};
