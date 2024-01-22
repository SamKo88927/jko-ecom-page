# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Something to say

The purpose of this project is to showcase my expertise in styling and demonstrate how I handle data flow in the front end. The interview is still in progress, and I had a tight deadline of 3 days to complete the task. During this time, my focus was on developing a data flow helper and creating a user interface effectively .

This project allowed me to demonstrate my skills in a limited time and showcase my ability to deliver high-quality work under pressure. and what I haven't finished is add the Thunks to mock the api fetch and build a sample Next.js backend to complete the process, all I need to do is no matter what demand changes, the backend API can still the same that the front end deal with the data refactoring to reduce the service loading.

- Configure the top-level `parserOptions` property like this:

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
