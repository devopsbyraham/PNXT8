const eslint = require("@eslint/js");

module.exports = [
  eslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs"
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "off"
    }
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        jest: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    }
  },
  {
    ignores: [
      "node_modules/",
      "coverage/"
    ]
  }
];
