# [SAGU-UI](https://vczb.github.io/sagu-ui)

It's a simple and faster React UI

## Installation

sagu-ui is available as an [npm package](https://www.npmjs.com/package/sagu-ui).

To install it, run:

```bash
  //with npm
  npm install sagu-ui

  //with yarn
  yarn add sagu-ui
```

_styled-componets are required_

## Usage

Here is a quick example to get you started, **it's all you need**:

```js
import React from 'react'
import { theme, SaguGlobalStyles, SaguProvider, Button } from 'sagu-ui'

function App() {
  return (
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      <Button>Click me</Button>
    </SaguProvider>
  )
}

export default App
```

Take a look at this [codesandbox](https://codesandbox.io/s/sagu-ui-example-r22mum?file=/src/App.js) demo

## What is inside?

- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Available commands

- `build`: build the files in the `lib` directory
- `storybook`: run the storybook at the address `localhost:6006`
- `prettier:check`: check formatting on all `src` directory
- `prettier:format`: formats all `src` directory

## Project structure

```
/.storybook
/lib
/src
├── index.ts
├── animations
|   ├── placeholder.ts
├── packages
|   ├── index.ts
|   ├── Button
|   |   ├── index.tsx
|   |   ├── stories.tsx
|   |   └── styles.ts
├── styles
|   ├── global.ts
|   ├── theme.ts
|   ├── provider.ts
```

## License

This project is licensed under the [MIT](./LICENSE) License.
