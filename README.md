# React TypeScript (TSX) Vite Project

This project was scaffolded using Vite with the React TypeScript template.

## Getting Started

1. **Install dependencies:**
  ```bash
  npm install
  ```
2. **Run the development server:**
  ```bash
  npm run dev
  ```

## Project Structure
- `src/` contains the main application code.
- `index.html` is the entry HTML file.
- `vite.config.ts` is the Vite configuration.

## Customization
Edit the files in `src/` to start building your application.

---

For more details, see the [Vite documentation](https://vitejs.dev/).

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
