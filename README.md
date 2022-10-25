![SAGU-UI](./logo.png)

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

_styled-components are required_

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

## Theme customization

You can easily override the values of the theme object

```js
function App() {
  const customTheme = Object.assign(theme)

  customTheme.colors.primary.medium = '#510763'

  return <SaguProvider theme={customTheme}>...</SaguProvider>
}
```

## Component customization

You have to many ways to customize the Sagu components

**Using styled-components**

```js
import styled from 'styled-components'
import { Button } from 'sagu-ui'

const MyCustomButton = styled(Button)`
  background: red;
`
...

<MyCustomButton>My Button</MyCustomButton>
```

**Using inline styles**

```js
import { Button } from 'sagu-ui'

...

<Button
  style={{
    background: 'yellow'
  }}
>
  My Button
</Button>
```

**Using CSS classes**

```css
.button-green {
  background: green;
}
```

```js
import { Button } from 'sagu-ui'
import './styles.css'

...

<Button className="button-green">My Button</Button>
```

Take a look at some [examples](./EXAMPLES.md) using [Sagu-UI](https://www.npmjs.com/package/sagu-ui)

## Contributing

You can contribute to this project by opening an issue or creating a pull request.

## What is inside?

- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

## Available commands

- `build`: build the files in the `lib` directory
- `sb`: run the storybook at the address `localhost:6006`
- `prettier:check`: check formatting on all `src` directory
- `prettier:format`: formats all `src` directory
- `generate <Component name>`: create a component boilerplate
- `test`: test all components

## Project structure

```
/.storybook
/lib
/src
├── index.ts
├── animations
|   ├── placeholder.ts
├── hooks
|   ├── ...
├── packages
|   ├── index.ts
|   ├── Button
|   |   ├── index.tsx
|   |   ├── stories.tsx
|   |   └── styles.ts
|   |   └── test.tsx
├── styles
|   ├── global.ts
|   ├── theme.ts
|   ├── provider.ts
```

## License

This project is licensed under the [MIT](./LICENSE) License.
