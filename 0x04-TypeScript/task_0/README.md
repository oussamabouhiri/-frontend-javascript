# Task 0 - TypeScript Introduction

## Overview

This task is part of the **0x04-TypeScript** module, designed to introduce you to the basics of TypeScript. TypeScript is a strongly typed superset of JavaScript that adds optional static typing to the language. It helps developers write more robust and maintainable code by catching common errors at compile time.

## Objectives

- Learn the basic syntax and types in TypeScript.
- Understand the benefits of using TypeScript over plain JavaScript.
- Set up a TypeScript project and compile `.ts` files to `.js`.

## Instructions

1. **Install TypeScript**  
   Make sure you have Node.js installed. Then, install TypeScript globally:
   ```bash
   npm install -g typescript
   ```

2. **Create your TypeScript file**  
   Write your TypeScript code in a file with the `.ts` extension (e.g., `main.ts`).

3. **Compile TypeScript to JavaScript**  
   Use the TypeScript compiler (`tsc`) to generate a JavaScript file:
   ```bash
   tsc main.ts
   ```

## Example

```typescript
// main.ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

After compiling, you will get a `main.js` file that you can run using Node.js.

## Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Getting Started with TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Author

- [oussamabouhiri](https://github.com/oussamabouhiri)

## License

This project is licensed under the MIT License.

