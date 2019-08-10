# Ngxtron

Starter project for an Angular + Electron + Nx app inspired by [maximegris](https://github.com/maximegris/angular-electron)

This project is setup to make full use of nx and monorepos from the get go

from mordern test tools like jest and cypress to documentation generation using compodoc

Not just limited to angular and electron, with the help of NX you can easliy add React projects, Nest/Express backends, or vanilla node projects

Also with the power to create shared libraries to allow maximum code reusability and these are just some of the features of nx..

## Project Structure

- `apps` contains all the applications within the monorepo
  - `browser` Angular project (Frontend UI)
  - `browser-e2e` Cypress e2e test project
  - `electron` A Node.ts project for electron
- `dist` contains built outputs of projects
- `documentation` contains generated documentation of the projects
- `libs` contains shared libraries for the monorepo
- `release` contains packaged electron apps for windows / linux / mac
- `tools` contains ng schematics and build scripts

## Start scripts

- `npm start` serves the angular app (electron build) on localhost:4200, waits for the angular build to finish and opens electron
- `npm run ng:serve` serve the angular app (electron build) on localhost:4200
- `npm run ng:serve:web` serve the angular app (browser build) on localhost:4200
- `npm run electron:serve` waits on 4200 then builds and starts electron
- `npm run electron:local` serve the electon app with a production build of angular app (electron build)

## Build Scripts

- `postinstall` overwrites angular webpack script for node integration dependeing on browser build or electron build
- `npm build` builds electron and angular app for electron mode
- `npm run build:dev` builds the project (electron + angular) with dev config
- `npm run build:prod` builds the project (electron + angular) with production config
- `npm run build:electron` builds electron only

## Test Scripts

- `npm run test:web` runs jest test runner for angular project
- `npm run test:electron` runs jest test runner for electron project
- `npm run e2e` runs cypress e2e tests

## Documentation Scripts

- `npm run doc:web` generates documentation for angular project using compodoc
- `npm run doc:electron` generates documentation for electron project using compodoc

## Packaging Scripts

- `npm run electron:linux` packages electron app for linux
- `npm run electron:windows` packages electron app for windows
- `npm run electron:mac` packages electron app for mac

# Nx

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@electron/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
