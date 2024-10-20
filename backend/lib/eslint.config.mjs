import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
export default [
    Object.assign(Object.assign(Object.assign({ 
        // Match all JavaScript and TypeScript files
        files: ["**/*.{js,mjs,cjs,ts}"], 
        // Use the TypeScript parser
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.node, // Node.js environment
        } }, pluginJs.configs.recommended), tseslint.configs.recommended), { 
        // Add TypeScript plugin
        plugins: {
            "@typescript-eslint": tseslint,
        }, 
        // Define custom rules
        rules: {
            "no-console": "warn", // Warn on console.log statements
            "quotes": ["error", "double"], // Enforce double quotes for strings
            "semi": ["error", "always"], // Enforce semicolons at the end of statements
        } })
];
//# sourceMappingURL=eslint.config.mjs.map