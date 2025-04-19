import pluginNext from "@next/eslint-plugin-next";

/**
 * A custom ESLint configuration for packages that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: [".next/**"],
  },
];

export default config;
