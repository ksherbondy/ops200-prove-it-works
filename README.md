# Mortgage Calculator - TDD Project

## Introduction
This project is a miniature Mortgage Calculator built using a Test-Driven Development (TDD) approach. It features a core math library, a React-based user interface, and a comprehensive suite of unit and end-to-end tests. The primary goal of this project was to implement the "Red-Green-Refactor" process to ensure code reliability and accuracy.

## Prerequisites
To run this project, you need Node.js and npm installed. Due to the legacy nature of the configuration, the following global installation is recommended:
```bash
npm install -g mocha@3
```
## Features
- Simple Calculator Module: Handles basic arithmetic (Add, Subtract, Multiply, Divide).

- Mortgage Engine: A class-based library that calculates monthly payments based on principal, interest rate, loan term, and payment period.

- React UI: A functional interface for users to input loan data and view results.

- Comprehensive Testing: Over 20 tests covering both logic and browser-based user flows.

## Installation
1\. Clone the repository to your local machine.

2\. Install dependencies:
```bash
npm install
```
## Available Scripts
In the project directory, you can run:

`npm run build`

Triggers the Webpack build process to compile the React application into the dist folder.

`npm start`

Runs an Express server to serve the built application.

`npm test`

Runs the full testing suite, including unit tests (Mocha/Chai) and End-to-End tests (Playwright).

## Testing Strategy
This project follows the Red-Green-Refactor workflow:

- Red: Write a failing test for a specific requirement.

- Green: Write the minimum amount of code needed to make the test pass.

- Refactor: Clean up the code while ensuring the tests remain green.

## Test Breakdown

- Unit Tests: Verify the logic of the Calculator and Mortgage classes in test/unit/.

- End-to-End Tests: Verify the React component renders correctly and calculates values accurately in a real browser environment using Playwright.

## Technologies Used
- Frontend: React

- Bundler: Webpack

- Testing: Mocha, Chai, Playwright

- Server: Express