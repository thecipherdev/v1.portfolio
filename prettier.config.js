//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  trailingComma: 'all',
  importOrder: [
    '^(react$)|^(react/(.*)$)',
    '^(@tanstack$)|^(@tanstack/(.*)$)',
    '<THIRD_PARTY_MODULES>',
    '^@sanity/(.*)$',
    '^@hooks/(.*)$',
    '^@lib/(.*)$',
    '^@ui/(.*)$|^@components/(.*)$',
    '^@(.*)$',
    '^([./])|^([../])',
  ],
};

export default config;
