module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    'camelcase': "off",
    'no-unused-vars': "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "no-irregular-whitespace": "off",
    "no-unused-expressions": "off",
    "no-return-assign": "off",
    "sort-imports": "off"

  },
};
