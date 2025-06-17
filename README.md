# Node.js File System Operations

A clean and efficient implementation of common file system operations using Node.js async/await patterns.

## Features

- Asynchronous file reading and writing
- Directory creation and checking
- Error handling with try-catch blocks
- Memory-efficient operations using promises
- Cross-platform compatibility using path module

## Requirements

- Node.js >= 14.0.0

## Installation

1. Clone this repository
2. No additional dependencies required (uses built-in Node.js modules)

## Usage

Run the example script:

```bash
npm start
# or
node fileOperations.js
```

## Available Functions

### `writeToFile(filePath, data)`
Asynchronously writes data to a file.

### `readFromFile(filePath)`
Asynchronously reads data from a file.

### `createDirectoryIfNotExists(dirPath)`
Creates a directory if it doesn't exist.

## Example Output

The script will:
1. Create a `data` directory
2. Create and write to `example.txt`
3. Read the contents back
4. Verify file existence

![image](https://github.com/user-attachments/assets/12281ea1-4390-4f1b-990a-b10a1c7eec24)


## Error Handling

All operations include proper error handling with informative error messages.
