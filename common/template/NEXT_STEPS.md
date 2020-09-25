# Next steps

## Azure AD Authentication

The example code is set up to use authentication. For this to work, an App Registration has to be set up in Azure AD.  
If you'd like to do this step later, you can remove the `forced` prop provided to `MsalBrowserProvider`.

### UI

Head over to [Azure -> Azure Active Directory -> App registrations](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps) with your Intility Account, and create a new registration.

Select a fitting name for your project, this name will be presented to the user during consent.

Under `Supported account types`, choose either `Intility AS only - Single tenant` or `Any Azure AD directory - Multitenant`. This can be changed later, so if you're unsure what to choose, select single tenant.

Under `Redirect URI`, select `Single-page application (SPA)` from the dropdown, and enter `http://localhost:3000`.

Hit the register button, and you will be taken to an overview of your newly created registration. Copy the `Application (Client) ID` GUID, and paste it into the `msal.auth.clientId` field in your `index.tsx` file.

You have now successfully set up authentication, and are able to run `npm start` locally.

### CLI

Login with the Azure CLI and run the following command (rember to modify the displayName)  
`az rest -u https://graph.microsoft.com/v1.0/applications -m post -b '{\"displayName\":\"MyApp\",\"spa\":{\"redirectUris\":[\"http://localhost:3000\"]}}'`  
Note: The body is escaped for PowerShell, please check escaping for your terminal of choice.

Copy the `appId` GUID, and paste it into the `msal.auth.clientId` field in your `index.tsx` file.

You have now successfully set up authentication, and are able to run `npm start` locally.

## SonarQube

A SonarQube analyzation job is included in the GitLab pipeline. To set this up, we'll need to create a project in SonarQube, and a token.

### UI

First, we need to [create a new project in SonarQube](https://sonarqube.intility.no/projects/create).

The project key should be the same as the repository slug in GitLab. If you use something other than the repository slug, you'll need to modify the `SONAR_PROJECT` variable in the top of the .gitlab-ci.yml file.

Then in the next step, either generate a new token, or select an existing one.  
Copy the token and add it to GitLab CI/CD variables with the name `SONAR_TOKEN`.

## Sentry

The project comes included with error reporting to Sentry, and a pipeline job to upload sourcemaps and create releases. To set this up, we'll need to create a project in Sentry, the project DSN and an auth token.

### Create Project

Head over to the [Create a new Project page in Sentry](https://sentry.intility.no/organizations/intility/projects/new/).

Under platform, select React.  
For the project name, use the repository slug from GitLab. If you use something other than the repository slug, you'll need to modify the `SENTRY_PROJECT` variable in the top of the .gitlab-ci.yml file.  
Select a fitting team, or create a new one, and hit Create.

You'll be taken to a Configure React page. In the code example under Connecting the SDK to Sentry, copy the `dsn` value, and add it to GitLab CI/CD variables with the name `SENTRY_DSN`.

### Acquire Token

Go to the [Auth Token section of your Account Settings](https://sentry.intility.no/settings/account/api/auth-tokens/).

The only needed scope is `project:admin`.

Copy the token and add it to GitLab CI/CD variables with the name `SENTRY_AUTH_TOKEN`.

### CLI

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
