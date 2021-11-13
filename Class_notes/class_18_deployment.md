# Class 18 - Deploying an Angular App

## Lesson Outline

Today we will learn:

1. How to deploy an Angular Application using Heroku.
2. How to setup a deploy when you commit to Github.

---

---

## Deployment - Project Steps

### STEP 1: Installing Developer Dependencies

_Terminal_:

- Install the latest version of the `@angular/cli@latest` and `@angular/compiler-cli` packages as developer dependencies.

- Install "express" (a package for create nodeJS servers) and "path" (for working with computer file-paths).

- Check your version of "node" and "npm" by running two commands. Save these values for later.

```zsh
# Only if you are not on version 12... version 13 will break this!
npm install --save-dev @angular/cli@latest @angular/compiler-cli
# . . .
npm install express path
# . . .
node -v
# . . .
npm -v
```

---

### STEP 2: Adding a Build Script && Engines

_package.json file_:

- Add a new script under the "build" script called "heroku-postbuild". Set it to run the code "ng build". Heroku will be looking for this script.

- Change the "start" script to run "node server.js"... a file we will create in the next step.

- Under the "devDependencies" object, add a new property "engines" that is set to an object containing the "node" and "npm" versions gathered earlier.

- _Note_: If the versions you have are throwing errors, paste these in: `"@angular/cli": "^12.2.1", "@angular/compiler-cli": "^12.1.5", "typescript": "~4.3.2"` and run `npm i`.

```json
{
  "name": "book-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "node server.js",
    "build": "ng build",
    "heroku-postbuild": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~12.1.2",
    "@angular/common": "~12.1.2",
    "@angular/compiler": "~12.1.2",
    "@angular/core": "~12.1.2",
    "@angular/forms": "~12.1.2",
    "@angular/platform-browser": "~12.1.2",
    "@angular/platform-browser-dynamic": "~12.1.2",
    "@angular/router": "~12.1.2",
    "bootstrap": "^4.6.0",
    "express": "^4.17.1",
    "path": "^0.12.7",
    "rxjs": "~6.6.0",
    "tslib": "^2.2.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~12.1.2",
    "@angular/cli": "^12.2.10",
    "@angular/compiler-cli": "~12.1.2",
    "@types/jasmine": "~3.8.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~3.8.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.0.3",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "~1.7.0",
    "typescript": "~4.3.2"
  },
  "engines": {
    "node": "16.5.0",
    "npm": "7.20.0"
  }
}
```

### STEP 3: Creating the Express Server

_server.js file_:

- Inside the root of the application, create a new file called "server.js".

- This file should import the "express" and "path" packages, initialize `express()`, serve the static build files from the "dist" folder, route incoming server requests to the correct location, and listen on a new port.

- _Note_: To find out the projects name, run "ng build" in the terminal and check the file located directly under the "dist" directory.

```javascript
// Import Express & Path Packages
const express = require("express");
const path = require("path");

// Initialize express
const app = express();

// Serve static build files from the "dist" directory
app.use(express.static("./dist/PROJECTNAME"));

// Route incoming server requests to the correct files
app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/PROJECTNAME/" })
);

// Start the app on the default Heroku port
app.listen(process.env.PORT || 8080);
```

- _Note_: Push the new code to GitHub!

---

### STEP 4 - Hooking Up Heroku

_Heroku Website_:

- In the browser, head on over to [https://www.heroku.com/](https://www.heroku.com/).

- Create an account.

- Create a new app.

- In the "Deployment Method" tab, choose the "Connect to GitHub" option.

- Select the repository the main project is located inside.

- Enable Automatic Deploys.

- Click Deploy Branch.

---

---
