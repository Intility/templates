"use strict";
const Generator = require("yeoman-generator");

class IntilityNodeGenerator extends Generator {
  initializing() {
  }

  prompting() {
    const prompts = [
      {
        type: "input",
        name: "projectTitle",
        message: "🏷 Please enter your projects name",
        default: this.appname
      },
      {
        type: "input",
        name: "projectDescription",
        message: "📜 Please enter a description for your project"
      },
      {
        type: "confirm",
        name: "includeDemoFolders",
        message: "🎁 Would you like to include example endpoints from the generated project?"
      },
      {
        type: "input",
        name: "gitSshAddress",
        message: `🚀 Insert your Git SSH Address (Optional)`,
        validate: str => {
          if (!str) {
            return true;
          } else {
            if (str.startsWith("git@")) {
              return true;
            } else {
              this.log(`😱 Invalid SSH Git address`)
              return false;
            }
          }
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Copy all regular files
    this.fs.copy(
      this.templatePath("*"),
      this.destinationPath(),
      {
        globOptions: { dot: true },
      }
    );

    this.fs.copy(this.destinationPath("_gitignore"), this.destinationPath(".gitignore"));
    this.fs.delete(this.destinationPath("_gitignore"))

    // Copy and modify package.json file
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    pkg.name = this.props.projectTitle
    pkg.description = this.props.projectDescription
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    // Copy all files in subfolders
    this.fs.copy(this.templatePath("src/**/*"), this.destinationPath("src"));
    this.fs.copy(this.templatePath("__tests__/**/*"), this.destinationPath("__tests__"));
    this.fs.copy(
      this.templatePath("assets/**/*"),
      this.destinationPath("assets")
    );
    this.fs.copy(
      this.templatePath(".vscode/*.json"),
      this.destinationPath(".vscode")
    );

    // If not include demo folders
    if (!this.props.includeDemoFolders) {
      this.fs.copy(this.templatePath("temp/baseRouter_without_users.ts"), this.destinationPath("src/baseRouter.ts"))
      this.fs.delete(this.destinationPath("src/api/users"))
      this.fs.delete(this.destinationPath("__tests__/api/users"))
    } else {
      this.fs.copy(this.templatePath("temp/baseRouter.ts"), this.destinationPath("src/baseRouter.ts"))
    }
  }

  install() {
  }

  end() {
    if (!this.props.gitSshAddress) {
      this.log(`😥 Skipping Git setup`)
    } else {
      this.log(`🗃 Initializing your Git environment!`)
      
      this.spawnCommandSync("git", ["init", "--initial-branch=main"]);
      this.spawnCommandSync("git", [
        "remote",
        "add",
        "origin",
        this.props.gitSshAddress
      ]);
      this.spawnCommandSync("git", ["add", "."]);
      this.spawnCommandSync("git", ["commit", "-m", '"Initial commit"', "--no-verify"]);
      this.spawnCommandSync("git", ["fetch"]);
      this.spawnCommandSync("git", ["push", "-u", "origin", "main"]);
      this.log(`🚀 Successfully pushed your source code to the provided GitLab Repository!`)
    }

    this.log(`\n**************************************************************\n`)
    this.log("🎉✨ Yeey! ✨🎉")
    this.log("Your project was successfully generated.")
    this.log(``)
    this.log(`But what should I do next you ask?`)
    this.log(`A great place to start is to head over to https://create.intility.app/express to learn more about this template.`)
    this.log(`\n**************************************************************\n`)
  }
};

module.exports = IntilityNodeGenerator;