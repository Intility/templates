<h1 align="center">
  <img src="https://avatars.githubusercontent.com/u/35199565" width="124px"/><br/>
  Intility Developer Templates
</h1>

<p align="center">
This repository contains Intility Templates for Create React App and .NET,
which aims to give Intility developers battle-tested sane defaults for their projects.
More frameworks might be included in the future.
</p>

<p align="center">
<a href="https://github.com/Intility/templates/actions">
    <img alt="publish docs" src="https://github.com/Intility/templates/actions/workflows/publish-docs.yml/badge.svg" style="max-width:100%;">
</a>

<a href="https://github.com/Intility/templates/actions">
    <img alt="publish dotnet" src="https://github.com/Intility/templates/actions/workflows/publish-dotnet.yml/badge.svg" style="max-width:100%;">
</a>
</p>

## [Docs](https://create.intility.app/)

## 🚀Getting started

To get started with a project, simply run one of the following commands.

Vite + React + TypeScript + Bifrost:

```bash
npx degit intility/templates/react my-app
cd my-app

npm install
npm start
```

dotnet:

```bash
dotnet new --install Intility.Templates
dotnet new intilityapi -o MyApi
```

There is a lot more to it, so please visit the [docs](https://create.intility.app/) for the next steps.

## Repository structure

### [react](./react/)

Contains a Vite + React + Typescript template.

### [dotnet](./dotnet/)

Contains all templates for .NET.

### [fastapi](./fastapi/)

Contains all templates for FastAPI.

### [docusaurus](./docusaurus)

Docs for these templates, made with [docusaurus](https://v2.docusaurus.io/).
