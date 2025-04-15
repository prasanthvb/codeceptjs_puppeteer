# 🧪 CodeceptJS with Puppeteer

This project demonstrates end-to-end testing with CodeceptJS and Puppeteer using a sample setup. It supports:

- ✅ Single scenario execution
- ⚡ Parallel test execution
- 🌐 Multi-browser setup (Puppeteer-based)

> Repo: [codeceptjs_puppeteer](https://github.com/prasanthvb/codeceptjs_puppeteer)

---

## 📦 Installation

```bash
git clone https://github.com/prasanthvb/codeceptjs_puppeteer.git
cd codeceptjs_puppeteer
npm install
```
✅ Run a Single Scenario
To run a specific test file:

```bash
npx codeceptjs run --grep "Locators"
```
✅ Run parallel execution

```bash
npx codeceptjs run-workers 2
```
🗂 Project Structure
codeceptjs_puppeteer/

    ├── codecept.conf.js
    ├── package.json
    ├── steps_file.js
    ├── output/
    └── tests/
        └── First_test.js
🖼 Output
Test artifacts like screenshots, logs, and traces will appear in the output/ directory.

💡 Useful Commands

Command	Description
npx codeceptjs run	Run all tests
npx codeceptjs run tests/First_test.js	Run specific test file
npx codeceptjs run --grep "Locators"	Run scenario by name
npx codeceptjs run-multiple parallel --all	Run tests in parallel (if configured)
npx codeceptjs dry-run	List available tests


📬 Contact
For any questions or issues, feel free to create an issue on GitHub.
