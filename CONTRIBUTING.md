# Contributing to Intility Templates

As these templates are targeted for developers working at Intility, contributions are limited to its employees.  
However, should your tech stack line up with ours, relevant contributions might be accepted.

## Commit messages

All commits messages should follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Samples:

```
fix(dotnet): fix ArgumentException when starting project based on template
```

```
docs: add Google auth guide to all frameworks
```

```
docs(contributing): add fastapi to example scopes
```


### Types

Accepted types are based on [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type):

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

Other types from the Angular convention can be used, should they be relevant.

### Scopes

Scopes should be the name of the framework or language affected. Should multiple languages or frameworks be affected, the scope might be omitted.

Current frameworks:

* **cra**
* **dotnet**
* **express**

For the **docs** type, the scope might additionally be the name of a markdown file in the root of the repository (in lowercase).

### Description

The description should

* use the imperative, present tense: "change" not "changed" nor "changes"
* not capitalize the first letter
* not use dot (.) at the end
