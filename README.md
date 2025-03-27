# **TypeScript Practice Project**

## **Project Overview**
This project is a basic setup to learn TypeScript by writing simple scripts and viewing the output in the browser console. The goal is to understand TypeScript fundamentals and observe how it compiles to JavaScript.

## **Setup & Execution**

### **1. Creating the TypeScript File**
I have created a TypeScript file named **`practice.ts`** to write TypeScript code.

### **2. Compiling TypeScript to JavaScript**
To convert `practice.ts` into JavaScript, I used the TypeScript compiler command:

```sh
 tsc practice.ts --watch
```

- `tsc`: Runs the TypeScript compiler.
- `practice.ts`: The TypeScript source file.
- `--watch`: Automatically compiles the TypeScript file whenever changes are made.

This command generates a `practice.js` file in the same directory.

### **3. Linking JavaScript in HTML**
To see the output in the browser console, I linked `practice.js` inside an `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Practice</title>
</head>
<body>
    <h1>Open the Console to See the Output</h1>
    <script src="practice.js"></script>
</body>
</html>
```

### **4. Running the Project**
1. Open `index.html` in a browser (Chrome, Firefox, Edge, etc.).
2. Open the browser console (**Right-click → Inspect → Console**) to view the output of `practice.js`.

## **Learning Objective**
This project is focused on learning the **basic concepts of TypeScript**, including:
- Type annotations
- Variables and data types
- Functions
- Classes and objects
- Compilation from TypeScript to JavaScript
- Debugging with browser console

## **Next Steps**
- Explore more advanced TypeScript concepts.
- Use TypeScript configurations (`tsconfig.json`).
- Work with modules and interfaces.
- Try using TypeScript with a framework like React or Angular.

Happy Coding! 🚀

