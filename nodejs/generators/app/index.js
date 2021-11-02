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
        message: "Please enter your projects name",
        default: this.appname
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Please enter a description for your project"
      },
      {
        type: "input",
        name: "gitSshAddress",
        message: `Insert your Git SSH Address (Optional)`,
        validate: str => {
          if (!str) {
            return true;
          } else {
            return str.startsWith("git@");
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
      this.templatePath("[!_]*"),
      this.destinationPath(),
      {
        globOptions: { dot: true },
      }
    );
    this.fs.copy(this.templatePath("_gitignore"), this.destinationPath(".gitignore"));
    
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
  }

  install() {
  }

  end() {
    if (!this.props.gitSshAddress) {
      this.log(`Skipping Git setup`)
    } else {
      this.log(`Initializing your Git environment!`)

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
    }
  }
};

module.exports = IntilityNodeGenerator;