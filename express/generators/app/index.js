"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

class IntilityNodeGenerator extends Generator {
  initializing() {
    this.log(`\n**************************************************************\n`)
    this.log(`✨ ${chalk.bold("Welcome to Intility Node.js project generator!")} ✨`)
    this.log("")
    this.log("Before you advance to the prompts, head over to GitLab and create a new repository:")
    this.log(chalk.cyan(`https://gitlab.intility.com/projects/new#blank_project`))
    this.log(`${chalk.yellow.bold("NOTE:")} Unselect the: 'Initialize repository with a README' under 'Project Configuration'`)
    this.log("")
    this.log("In the next couple of steps you will be prompted some required and some optional inputs:")
    this.log(` * ${chalk.bold("Name and description:")} These should be the same as provided when creating a GitLab Repository`)
    this.log(` * ${chalk.bold("Git SSH Address:")} This can be found by clicking the 'Clone' button located at the empty repository page.`)
    this.log(` * ${chalk.bold("Example endpoints")}: This is a complete set of CRUD-endpoints, including ${chalk.bold("Swagger Documentation")} and ${chalk.bold("Unit Testing")}`)
    this.log("")
    this.log("⚡ Enough talk! Lets go! ⚡")
    this.log(`\n**************************************************************\n`)
    this.log("")
  }

  prompting() {
    const prompts = [
      {
        type: "input",
        name: "projectTitle",
        message: "🏷 Please enter your projects name:",
        default: this.appname
      },
      {
        type: "input",
        name: "projectDescription",
        message: "📜 Please enter a description for your project:",
        validate: str => {
          if (!str || str.length === 0) {
            return `😱 ${chalk.red("Please enter a value")}`
          } else {
            return true
          }
        }
      },
      {
        type: "confirm",
        name: "includeDemoFolders",
        message: "🎁 Would you like to include example endpoints from the generated project?"
      },
      {
        type: "input",
        name: "gitSshAddress",
        message: `🚀 Enter the SSH Address of your repository ${chalk.gray("(Optional)")}:`,
        validate: str => {
          if (!str || str.startsWith("git@")) {
            return true;
          } else {
            return `😱 ${chalk.red("Invalid SSH Git address, this string must start with: git@")}`;
          }
        }
      }
    ];

    return this.prompt(prompts)
      .then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;

        let projectUrl = "";
        let pipelineStatusBadgeUrl = "";
        let codeCovBadgeUrl = "";
        
        if (props.gitSshAddress) {
          const projectPath = props.gitSshAddress
            .split(":")[1] // get path
            .slice(0, -4); // remove .git from end of ssh
          
          projectUrl = "https://gitlab.intility.com/" + projectPath;
          pipelineStatusBadgeUrl = projectUrl + "/badges/main/pipeline.svg";
          codeCovBadgeUrl = projectUrl + "/badges/main/coverage.svg";
        }

        this.props.projectUrl = projectUrl;
        this.props.pipelineStatusBadgeUrl = pipelineStatusBadgeUrl;
        this.props.codeCovBadgeUrl = codeCovBadgeUrl;
      });
  }

  writing() {
    // Copy all root level files
    this.fs.copyTpl(
      this.templatePath("*"),
      this.destinationPath(),
      this.props,
      {},
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

    // Copy folders
    this.fs.copy(this.templatePath("src/**/*"), this.destinationPath("src"));
    this.fs.copy(this.templatePath("chart/**/*"), this.destinationPath("chart"));
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
      // Copy and rename router without user.
      this.fs.copy(this.templatePath("temp/baseRouter_without_users.ts"), this.destinationPath("src/baseRouter.ts"))
      
      // Remove demo files
      this.fs.delete(this.destinationPath("src/api/users"))
      this.fs.delete(this.destinationPath("__tests__/api/users"))
    } else {
      this.fs.copy(this.templatePath("temp/baseRouter.ts"), this.destinationPath("src/baseRouter.ts"))
    }
  }

  install() {
  }

  end() {
    this.log(`📦 Initializing your Git repository!`)
    this.spawnCommandSync("git", ["init", "--initial-branch=main"]);
    
    this.log(`🚀 Your Git Repository was successfully initialized!`)
    
    if (!this.props.gitSshAddress) {
      this.log(`😥 Skipping commit, no SSH was provided.`)
    } else {
      this.log(`🚀 Committing changes...`)      
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
    this.log(chalk.green("Your project was successfully generated."))
    
    if (this.props.gitSshAddress) {
      this.log(`You can find it here: ${this.props.projectUrl}`)
    }

    this.log(``)
    this.log(`But what should I do next you ask?`)
    this.log(`A great place to start is to head over to this projects README.md and have a look,`)
    this.log(`or head over to https://create.intility.app/express to learn more.`)
    this.log(`\n**************************************************************\n`)
  }
}

module.exports = IntilityNodeGenerator;