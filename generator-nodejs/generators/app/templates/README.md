# Node TypeScript Project

This project provides an ready to use project template as well as guide covering basic setup for an Node.js application written in TypeScript.

This is a great starting point for using Node.js, TypeScript, and Visual Studio Code. All artifacts get created in the `build` folder. All the source code is in `src` folder.

## Getting started using this template

You'll need to install [Yeoman](https://yeoman.io/) to install this template.

```bash
npm install -g yo                         # Install Yeoman CLI
npm install -g generator-intility-node    # Install Intility Node project generator
```

Then generate your new project:

```bash
yo intility-node                          # Use Yeoman CLI to run the template generator
```

## Goals

* Provide an ready to develop TypeScript configuration setup.
* Ready configured EsLint with the most common rules.
* Async error handling.
* Logging to Azure Application Insights.
* Integrate common security measures:
  * CORS
  * Authentication and authorization using [Passport](https://www.passportjs.org/) as well as custom common token rules. Including Role-based access control, guest user validation and checking user tenant.

## Questions and Contributions

While this setup might work, it is nor perfect or complete!
Maybe I'm missing some key part? or you have a suggestion on something that can be done different or in another way?

If you have any questions or suggestions, please send an merge request on the GitLab project located [HERE](https://gitlab.intility.com/documentation/NodeTypeScriptProjectTemplate) or [message me](https://teams.microsoft.com/l/chat/0/0?users=christian.marker@intility.no) at Microsoft Teams
