import markdown from "@eslint/markdown";

export default [
  {
    // https://github.com/eslint/eslint/discussions/18304#discussioncomment-9069706
    ignores: [
      "node_modules/*",
    ],
  },
  {
  //   languageOptions: {
  //     parser: babelParser,
  //     parserOptions: {
  //       ecmaVersion: 2022,
  //       sourceType: "module",
  //       requireConfigFile: false,
  //       babelOptions: {
  //         plugins: ["@babel/plugin-syntax-import-assertions"],
  //       },
  //     },
  //     globals: {
  //       browser: true,
  //       node: true,
  //     },
  //   },
    rules: {
      "no-undef": 2,
    },
  },
  {
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    language: "markdown/gfm",
    rules: markdown.configs.recommended[0].rules,
  },
];
