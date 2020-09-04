# Next steps

## Set up authentication

Before you start the application, authentication has to be set up.

Head over to [Azure -> Azure Active Directory -> App registrations](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) with your Intility Account, and create a new registration.

Select a fitting name for your project, this name will be presented to the user during consent.

Under `Supported account types`, choose either `Intility AS only - Single tenant` or `Any Azure AD directory - Multitenant`. This can be changed later, so if you're unsure what to choose, select single tenant.

Under `Redirect URI`, select `Single-page application (SPA)` from the dropdown, and enter `http://localhost:3000`.

Hit the register button, and you will be taken to an overview of your newly created registration. Copy the `Application (Client) ID` GUID, and paste it into the `msal.auth.clientId` field in your `index.tsx` file.

You have now successfully set up authentication, and are able to run `npm start` locally.

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
