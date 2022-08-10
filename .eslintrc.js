module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["plugin:react/recommended", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
            requireConfigFile: false,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "prettier", "import", "@typescript-eslint"],
    rules: {
        "react/display-name": "off",
        "react/prop-types": "off",
        "prettier/prettier": [
            "error",
            {
                trailingComa: "es5",
                tabWidth: 4,
                semi: true,
                singleQuote: false,
                bracketSpacing: true,
                arrowParens: "always",
                endOfLine: "auto",
            },
        ],
        "react/self-closing-comp": "warn",
        semi: ["error", "always"],
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_.*?$",
            },
        ],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": ["warn", { ignoreParameters: true }],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", ["parent", "sibling"]],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "{.,..}/*.scss", // same directory only
                        group: "object",
                        position: "after",
                    },
                ],
                warnOnUnassignedImports: true,
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};
