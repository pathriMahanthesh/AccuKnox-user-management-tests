# AccuKnox User Management Tests

## Overview

This project contains an End-to-End (E2E) automation framework built using **Playwright with JavaScript** to test the **User Management** functionality of the OrangeHRM application.

The framework follows the **Page Object Model (POM)** design pattern for better maintainability, readability, and scalability.

---

## Application Under Test

**OrangeHRM Demo**

https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

### Login Credentials

| Username | Password |
| -------- | -------- |
| Admin    | admin123 |

---

# Project Structure

```
AccuKnox-user-management-tests
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── AdminPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── navigateAdmin.spec.js
│   ├── addUser.spec.js
│   ├── searchUser.spec.js
│   ├── editUser.spec.js
│   └── deleteUser.spec.js
│
├── test-data/
│   └── user.json
│
├── utils/
│   ├── constants.js
│   └── testHelper.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Test Scenarios Automated

The following end-to-end scenarios have been automated:

* Login to OrangeHRM
* Navigate to Admin Module
* Add a New User
* Search the Newly Created User
* Edit User Details
* Delete the User

---

# Automation Framework

* Language: JavaScript
* Framework: Playwright
* Design Pattern: Page Object Model (POM)
* Test Runner: Playwright Test Runner

---

# Prerequisites

Install the following before running the project:

* Node.js (v18 or later)
* Visual Studio Code
* Git

---

# Installation

Clone the repository

```bash
git clone https://github.com/<your-github-username>/AccuKnox-user-management-tests.git
```

Navigate to the project folder

```bash
cd AccuKnox-user-management-tests
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Running Test Cases

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/addUser.spec.js
```

Example

```bash
npx playwright test tests/searchUser.spec.js
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run tests in debug mode

```bash
npx playwright test --debug
```

---

# Playwright Version

Check the installed version

```bash
npx playwright --version
```

**Playwright Version Used:** *(Replace with the version installed on your machine, for example: 1.54.2)*

---

# Test Reports

Generate the HTML report

```bash
npx playwright show-report
```

---

# Framework Features

* Page Object Model (POM)
* Reusable page methods
* External test data using JSON
* Dynamic username generation
* Explicit waits for stable execution
* Independent test cases
* HTML reporting
* Screenshot capture on failure
* Video recording on failure
* Trace generation on failure

---

# Test Data

User details are maintained in:

```
test-data/user.json
```

This file stores:

* Employee Name
* User Role
* Status
* Password

A unique username is generated dynamically during execution.

---

# Assignment Deliverables

✔ Manual Test Cases

✔ Playwright Automation

✔ Page Object Model

✔ Separate Test Cases

✔ HTML Report

✔ GitHub Repository

---

# Author

**Pathri Mahanthesh**

QA Automation Assignment for **AccuKnox**
