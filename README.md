<h1 align="center">
  Book Library System
</h1>

<p align="center">
  <a target="_blank" href="https://react.dev/">
    <img alt="React" src="https://img.shields.io/badge/react-%2323272f.svg?style=for-the-badge&logo=react&logoColor=%23149eca" />
  </a>
  <a target="_blank" href="https://nextjs.org/">
    <img alt="Next.js" src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=%23FFFFFF" />
  </a>
  <a target="_blank" href="https://www.typescriptlang.org/">
    <img alt="Typescript" src="https://img.shields.io/badge/typescript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=%23FFFFFF" />
  </a>
</p>

<div align="center">
  <img alt="project running" src="./git/project-running.gif" />
</div>

## About the Project

The Book Library System project is a web application that facilitates book management and borrowing processes. It includes features such as user authentication, a book list with search functionality, detailed book information, and the ability to borrow and return books.

[**Application Demo**](https://your-app-demo-url.com/) <br />
[**Repository Link**](https://github.com/your-username/your-repo)

## Technologies

- _[TypeScript](https://www.typescriptlang.org/)_
- _[React](https://react.dev/)_
- _[Next.js](https://nextjs.org/)_
- _[Eslint](https://eslint.org/)_

## How to Run this Project

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed on your computer.

### Requirements and Versions

- Node.js: >= 18.17.0
- NPM: >= 6.0.0
- NPX: >= 5.2.0
- Yarn: >= 3

### Clone the Repository

```bash
# Clone with https
$ git clone https://github.com/vitormarco/library

$ cd library
```

### Prepare env

Who can use .env for example how to setup .env.local.

### 🚀 Start the Project

```bash
# Install all dependencies
$ yarn

# Run the project in development mode
$ yarn dev

# Run API
$ yarn server
```

### Commands

- `dev`: Run the application on localhost:3000
- `server`: Run API on localhost:3333
- `build`: Creates the project build
- `start`: Runs the application according to the generated production build
- `format`: Run _prettier_ lint on all components and pages
- `lint`: Run _next_ lint on all components and pages
- `commit`: Performs commit and push according to _git_ conventions

## Need Improvements and Future Work

While the current version of the Book Library System meets the specified requirements, there are areas that can be improved or additional features that can be added in future releases. Here are some suggestions:

- [ ] Add user info in slice (REDUX) for global acess data
- [ ] Coverage all components with unit test, Integration test and E2E
- [ ] Implement role in system
- [ ] Call RTK query in next server to prevent expose API route and security
- [ ] Add limit rate in forms
- [ ] Add Recaptcha
- [ ] Add CSP HTTP
- [ ] RTK query in server side for SEO
