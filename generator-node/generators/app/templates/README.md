
<div align="center">
<h1 align="center">
  <img src="https://avatars.githubusercontent.com/u/35199565" width="124px"/><br/>
  <%= projectTitle %>
</h1>

<p align="center">
<%= projectDescription %>
</p>

![<%= pipelineStatusBadgeUrl %>](<%= projectUrl %>)
![<%= codeCovBadgeUrl %>](<%= projectUrl %>)

</div>

## What should I do next?

* Generate SonarQube Token ([Guide](https://create.intility.app/cra/configuration/sonarqube))
  * Add the badge ([Guide](https://gitlab.intility.com/hannarong.klinjan/sonarqube-badge-proxy/-/blob/master/README.md))
* Add Code coverage regexp to Gitlab to make the badge work.
  * Navigate to: `GitLab Repository -> Settings -> CI/CD -> General pipelines -> Test coverage parsing`
  * Enter: `All files[^|]*\|[^|]*\s+([\d\.]+)`
* Create an `.env` file by using the template provided in `.env.template`
  * Setup authentication ([Guide](https://create.intility.app/express/API/Azure/ApplicationRegistrations))
* Setup your OpenShift environment:
  * Create a project on OpenShift ([Guide](https://create.intility.app/cra/configuration/deploy))
  * Create a Deploy Token for your GitLab Repository ([Guide](https://create.intility.app/cra/configuration/gitlab#add-gitlab-deploy-token))

## About this template

This project provides an ready to use project template as well as guide covering basic setup for an Node.js application written in TypeScript.

This is a great starting point for using Node.js, TypeScript, and Visual Studio Code. All artifacts get created in the `build` folder. All the source code is in `src` folder.

## Getting started using this template

You'll need to install [Yeoman](https://yeoman.io/) to install this template.

```bash
npm install -g yo                          # Install Yeoman CLI
npm install -g @intility/generator-node    # Install Intility Node project generator
```

Then generate your new project:

```bash
yo @intility/node                          # Use Yeoman CLI to run the template generator
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
