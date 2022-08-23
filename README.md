# Code format Node.js (commonjs)

This is boilerplate to use eslint + best practice configs and Prettier.

The main goal is make auto-formatting IDE process.

## IDE Integration

We can set up our IDE to fix all lint rules and format code by Prettier.

### Webstorm

#### Manual setup

1. Open Preferences
2. Find Node.js tab. Choice Node.js interpreter
3. Find ESLint.

- Set Manual Configuration and set folder to "node_modules/eslint" in your project
- Set working directories to root of your project
- Set path to your _.eslintrc.js_ file
- Select "Run eslint --fix on save"

4. Find Prettier.

- Set Prettier path
- Select "On Reformat code action", "On save"

### VSCode

#### Manual setup

1. Set "Format on save"
2. Set "Format on paste"

#### Configuration setup

1. Setup recommended extensions:

```shell
mkdir .vscode && touch .vscode/extensions.json
```

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "streetsidesoftware.code-spell-checker",
    "aaron-bond.better-comments",
    "yzhang.markdown-all-in-one",
    "gruntfuggly.todo-tree",
    "humao.rest-client"
  ]
}
```

2. Setup VSCode settings:

```shell
mkdir .vscode && touch .vscode/settings.json
```

Then add settings:

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.tabSize": 2,
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.lintTask.enable": true,
  "files.autoSave": "onWindowChange",
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "files.eol": "\n",
  "typescript.tsdk": "node_modules\\typescript\\lib",
  "tslint.enable": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
