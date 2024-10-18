import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";
import reactAppConfig from "eslint-config-react-app";  // Import react-app config


export default [
  {
    // Match JavaScript, TypeScript, and React files
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    
    // Add TypeScript parser
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    
    // Extend ESLint recommended rules, TypeScript, and React configs
    ...pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    ...reactAppConfig,  // Include react-app config


    // Custom plugins for TypeScript and React
    plugins: {
      "@typescript-eslint": tseslint,
      "react": pluginReact
    },

    // Add specific rules
    rules: {
      "no-console": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    },

    // React settings to automatically detect the version
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];