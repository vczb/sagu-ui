![SAGU-UI](./logo.png)

It's a simple and faster React UI

## Installation 🛠️

sagu-ui is available as an [npm package](https://www.npmjs.com/package/sagu-ui).

To install it, run:

```bash
  //with npm
  npm install sagu-ui

  //with yarn
  yarn add sagu-ui
```

_[styled-components](https://github.com/styled-components/styled-components) package is required_

## Usage 👇

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

## Theme customization ✒️

You can easily override the values of the theme object

```js
import { theme, SaguProvider } from 'sagu-ui'

function App() {
  const customTheme = Object.assign(theme)

  customTheme.colors.primary.medium = '#510763'

  return <SaguProvider theme={customTheme}>...</SaguProvider>
}
```

Also you can add an entire custom object and it will be available on the Provider

```js
import { theme, SaguProvider } from 'sagu-ui'
import { CustomWrapper } from './components/CustomWrapper'

function App() {
  const customTheme = Object.assign(theme)

  customTheme.colors.tertiary = {
    lighter: '#fb973a',
    light: '#e37c1d',
    medium: '#da710f',
    dark: '#9e4c01'
  }

  return (
    <SaguProvider theme={customTheme}>
      <CustomWrapper>...</CustomWrapper>
    </SaguProvider>
  )
}
```

```js
// components/CustomWrapper.ts
import styled, { css } from 'styled-components'

export const CustomWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.tertiary.medium};
  `}
`
```

## Component customization 🔧

You have too many ways to customize the Sagu components

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

## Examples ✍️

Take a look at some [examples](./EXAMPLES.md) using [Sagu-UI](https://www.npmjs.com/package/sagu-ui)

## Contributing 🤝

You can contribute to this project by opening an issue or creating a pull request.

## What is inside❓

- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

## Available commands ⬇️

- `build`: build the files in the `lib` directory
- `sb`: run the storybook at the address `localhost:6006`
- `prettier:check`: check formatting on all `src` directory
- `prettier:format`: formats all `src` directory
- `generate <Component name>`: create a component boilerplate
- `test`: test all components

## Project structure 🧬

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
## Our Amazing Contributors 🌟
Thanks for all who is contributing with us.

<a href="https://github.com/vczb/sagu-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vczb/sagu-ui" />
</a>

Be part of this amazing team, [contribute](./CONTRIBUTING.md) as well

## License 📜

This project is licensed under the [MIT](./LICENSE) License.
