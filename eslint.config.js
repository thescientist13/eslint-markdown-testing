import markdown from "@eslint/markdown";

export default [
  {
    // https://github.com/eslint/eslint/discussions/18304#discussioncomment-9069706
    ignores: [
      "node_modules/*",
    ],
  },
  {
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
