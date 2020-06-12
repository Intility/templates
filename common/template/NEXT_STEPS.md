# Next steps

## Deploying to OpenShift

### Create project
Should be same as project slug in GitLab.

### Create Service Account
In this step we will use the [OpenShift CLI](https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html).  
Copy login command from OpenShift Console and paste it in a terminal.  
After logging in, the CLI will show you available projects. Follow the instructions to change to the project you just created.

When you have selected the right project, we need to create a Service Account.  
`oc create sa gitlab-builder`  
Note the `gitlab-builder-token-*` in the `Mountable secrets` section.

Then we have to set the user to admin.  
`oc policy add-role-to-user admin -z gitlab-runner`

Lastly, we have to extract the token from the secret presented in the first step.  
`oc describe secret <secret-name>`  
Copy the contents from the `token` section and add it to GitLab CI/CD variables with the name `OPENSHIFT_TOKEN`.

### Enable OpenShift job

## Sentry

### ?

## SonarCube

### ?