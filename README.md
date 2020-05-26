# create-react-app Templates

This repository contains Intility Templates for Create React App. In the future, templates for next.js or other frameworks might be included.

Visit the [Create-React-App Custom Templates docs](https://create-react-app.dev/docs/custom-templates/) for more information.

## Purpose

When you normally run create-react-app, you get a great simple starting point for developing React locally. However, the next steps are not instantly clear. Where do I get the Intility favicon? Which router should I use? Do I have to make the styles myself? How and where can I deploy it?  

These very opinionated templates aims to give developers battle-tested sane defaults for Intility projects using React.

## Intended consumers

React developers of Intility.

## Main technologies

React & create-react-app.

## Available at

These templates are available from the Intility NPM registry, and should be used through create-react-app.

## Getting Started

See each template's README, and be sure to have configured the Intility NPM registry on your machine.

## Repository structure
All templates are published under @intility scope.

### common
This folder contains shared files for all templates; Dockerfiles, environment files, etc.

### cra-template
This template is a plain template that includes Bifrost, a router, auth and infrastructure files.

### cra-template-extensive
This template extends the base cra-template, with an application example that communicates with Microsoft Graph.

## Deployment

For each cra-template* folder, the pipeline will merge the common folder into it, and publish it to NPM.