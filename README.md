## Task Manager - basic task manager app

### Specs :

[SPECS.md](SPECS.md)

### Tools

- [Create React App](https://facebook.github.io/react/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Router](https://reactrouter.com/en/main/)
- [ESLint](http://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged/)
- [Commitizen](https://github.com/commitizen/cz-cli/)
- [Commitlint](https://commitlint.js.org/#/)

### Git hooks

- `pre-commit` - lint code and styles
- `commit-msg` - validate commit message

### Installation

- `nvm use` - use node version from `.nvmrc`
- `npm install` - install dependencies

### Usage

- `npm start` - start development server
- `npm run build` - build production version
- `npm run lint` - lint code
- `npm run lint:fix` - lint code and fix errors
- `npm run stylelint` - lint styles
- `npm run stylelint:fix` - lint styles and fix errors
- `npm run format` - format code

### Conventional Commits with [Commitizen](https://github.com/commitizen/cz-cli/) and [Commitlint](https://commitlint.js.org/#/)

- `git add .` - stage all changes
- `git cz` - commit changes with Commitizen
- `git push` - push changes to remote repository
