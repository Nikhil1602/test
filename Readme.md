## 📦 package.json — the project blueprint

Think of package.json as the central configuration file of your project. It tells Node.js (and other developers) everything important about your app.

Key concepts:
```
Metadata → name, version, description
Entry point → main (starting file of your app)
```

Scripts → custom commands like:

```
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

```
Dependency management → tracks all installed packages
Project reproducibility → ensures anyone can run npm install and get the same setup
```

In short, it acts like a contract for your project setup.

## ⚙️ dependencies — runtime essentials

These are the packages your application needs to run in production.

Key concepts:

Installed using:

```
npm install <package>
```

Required when your app is deployed
Missing them = app will crash

Examples:
Express.js (server)
Axios (API calls)

👉 These are part of your final product.

## 🛠️ devDependencies — development tools

These are packages used only while building or developing the app.

Key concepts:

Installed using:

```
npm install <package> --save-dev
```
Not required in production
Help improve workflow, not functionality
Examples:
nodemon (auto restart)
ESLint (code quality)
Jest (testing)

👉 These are part of your development environment, not the final app.

🔁 How they work together
```
package.json → defines everything
dependencies → what your app runs on
devDependencies → what your app is built with
```