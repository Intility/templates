# Intility Create React App Templates

This is the home for the create-react-app templates.

## Structure

### common

This folder contains shared files for all templates; Dockerfiles, environment files, charts etc.

### [cra-template](./cra-template/)

This template includes Bifrost, a router, auth and infrastructure files.

### [cra-template-js](./cra-template-js)

This is the same as cra-template, but TypeScrip is stripped away using babel.

## Scripts

### `npm run build`

This will:

- Run babel, which strips typescript from the base template and saves it to `cra-template-js`
- Copy the `common` folder into each `crea-template*` folder
- Run prettier on the generated js code

### `npm run bump [major|minor|patch]`

Will update the templates `package.json` version using lerna, and create a tag like `cra-vX.X.X`

## Release

When a tag beginning with `cra-v` is pushed, a GitHub action will publish the package using `lerna publish`.
All templates are published under @intility scope.
