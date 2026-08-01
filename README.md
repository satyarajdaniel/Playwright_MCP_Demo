# Playwright MCP + AI Agents Demo

This repository is a practical Playwright MCP example for using VS Code AI agents to plan, generate, and heal browser tests for the SauceDemo application.

It shows how to combine:
- Playwright test automation
- VS Code MCP integration
- GitHub Copilot agents
- Planner, Generator, and Healer workflows

---

## Prerequisites

Before using the MCP agents in this repo, make sure the following are installed and available:

- Node.js 18+ (20+ recommended)
- VS Code 1.105 or later
- GitHub Copilot signed in with an active model
- Git
- A working browser installation for Playwright

Verify the environment with:

```bash
node --version
npx playwright --version
```

---

## 1. Install dependencies

From the repository root, install the project dependencies:

```bash
npm install
```

Install the Playwright MCP package:

```bash
npm install @playwright/mcp
```

Install Playwright browsers:

```bash
npx playwright install chromium
```

If needed, install the VS Code extension for MCP support:

```bash
code --install-extension ms-playwright.mcp
```

---

## 2. Initialize Playwright agents in VS Code

Initialize the agent setup for the workspace:

```bash
npx playwright init-agents --loop=vscode
```

This creates the agent configuration and supporting files under the repository so Planner, Generator, and Healer can work with your project.

---

## 3. Project structure

```text
.github/           # GitHub Copilot / agent-related configuration
.vscode/           # VS Code workspace settings and MCP config
specs/             # Planner-generated Markdown test plans
src/               # Page objects and helpers
src/pages/         # Login and inventory page objects
src/fixtures/      # Shared Playwright fixtures
tests/             # Automated Playwright test specs
tests/data/        # JSON test data
```

---

## 4. Agent workflow

### Planner Agent

Use the Planner agent to explore the application and generate a plain-English test plan.

Run:

```bash
npx playwright mcp planner
```

Example prompt:

```text
Explore https://www.saucedemo.com.

Cover the login flow with these scenarios:
- standard_user (successful login)
- locked_out_user (shows locked error)
- empty username submission
- empty password submission
- invalid credentials

Save the plan to specs/saucedemo-login.md
```

Expected output:
- A Markdown test plan in the specs folder
- No code changes to the test suite

---

### Generator Agent

Use the Generator agent to turn a saved plan into runnable Playwright test code.

Run:

```bash
npx playwright mcp generator
```

Example prompt:

```text
Use scenario 1 from specs/saucedemo-login.md.
Create the page objects needed for the login flow.
Generate the test file under tests/auth/.
Use the existing repo conventions and keep the test runnable.
```

Expected output:
- Page objects under src/pages/
- A Playwright test file under tests/
- A test that can be executed locally

---

### Healer Agent

Use the Healer agent when a test is failing and needs a minimal, reliable fix.

Run:

```bash
npx playwright mcp healer
```

Example prompt:

```text
The test at tests/auth/standard-login.spec.js is failing.
Diagnose the issue, fix the root cause, and preserve the original assertions.
Do not weaken the test or skip it.
```

Expected output:
- A minimal fix for the failing test
- A short explanation of what changed and why
- No test weakening or skipped assertions

---

## 5. Run tests manually

After the agents generate or update the tests, you can run them directly:

```bash
npx playwright test
```

To view the generated report:

```bash
npx playwright show-report
```

To record a new flow interactively:

```bash
npx playwright codegen https://www.saucedemo.com
```

---

## 6. Recommended workflow for this repo

1. Use the Planner agent to create a test plan.
2. Use the Generator agent to create or update the test code.
3. Run the test locally.
4. If it fails, use the Healer agent to diagnose and fix it.
5. Re-run the test and review the report.

---

## 7. Notes

This repository follows a simple Playwright MCP workflow designed for learning and experimentation:

- Keep tests resilient and readable
- Prefer stable locators over brittle selectors
- Use the agents as assistants, not as a replacement for review
- Validate generated tests by actually running them
