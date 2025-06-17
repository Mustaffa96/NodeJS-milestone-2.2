const fs = require('fs').promises;
const path = require('path');

// Function to write data to a file
async function writeToFile(filePath, data) {
    try {
        await fs.writeFile(filePath, data, 'utf8');
        console.log('Successfully wrote to file:', filePath);
    } catch (error) {
        console.error('Error writing to file:', error.message);
        throw error;
    }
}

// Function to read data from a file
async function readFromFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (error) {
        console.error('Error reading file:', error.message);
        throw error;
    }
}

// Function to create directory if it doesn't exist
async function createDirectoryIfNotExists(dirPath) {
    try {
        await fs.access(dirPath);
    } catch {
        await fs.mkdir(dirPath, { recursive: true });
        console.log('Directory created:', dirPath);
    }
}

// Example usage
async function main() {
    try {
        // Create a data directory
        const dataDir = path.join(__dirname, 'data');
        await createDirectoryIfNotExists(dataDir);

        // Write to a file
        const filePath = path.join(dataDir, 'example.txt');
        const contentToWrite = 'Hello, this is a test file content.\nWritten at: ' + new Date().toISOString();
        await writeToFile(filePath, contentToWrite);

        // Read from the file
        const readContent = await readFromFile(filePath);
        console.log('File contents:', readContent);

        // Demonstrate file exists check
        const exists = await fs.access(filePath)
            .then(() => true)
            .catch(() => false);
        console.log('File exists:', exists);

    } catch (error) {
        console.error('Main process error:', error.message);
    }
}

// Run the example
main();
