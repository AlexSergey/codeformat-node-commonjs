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
- Set path to your *.eslintrc.js* file
- Select "Run eslint --fix on save"

4. Find Prettier.

- Set Prettier path
- Select "On Reformat code action", "On save"

### VSCode

#### Manual setup

1. Set "Format on save"
2. Set "Format on paste"

#### Configuration setup

```shell
mkdir .vscode && touch .vscode/settings.json
```

Then add settings:

```json
{
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "tslint.enable": false
}
```
