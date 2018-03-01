# Angular Pokedex
This application searches through the 151 original pokemon.

## Versions
* [Angular CLI](https://github.com/angular/angular-cli) v1.7.2
* Angular v5.2.7
* [Bulma](https://bulma.io) v0.6.2

## Installation
1. Clone this repo `git clone https://github.com/stanleyeosakul/angular-pokedex.git`
1. `cd` into the folder of the cloned repo
1. Run `yarn install` to install dependencies
1. Run `ng serve`, and navigate to `http://localhost:4200/`

## Deploying to Heroku
1. Modify the `start` and `postinstall` scripts in `package.json` to:

    ```json
    "scripts": {
        "ng": "ng",
        "start": "node server.js",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e",
        "postinstall": "ng build --prod"
    },
    ```
2. Move the following dependecies from `devDependencies` to `dependencies` in `package.json`:

    ```json
    "dependencies": {
        ...
        "@angular/cli": "1.6.6",
        "@angular/compiler-cli": "^5.2.2",
        ...
        "typescript": "~2.5.3",
        ...
    },
    ```
5. Deploy to Heroku as directed in their [documentation](https://devcenter.heroku.com/articles/git).