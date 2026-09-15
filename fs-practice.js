// // 1. IMPORT CORE MODULES
// // Using the 'node:' prefix is the modern standard for built-in modules
// import fs from 'node:fs/promises';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

// // 2. RESOLVE THE DIRECTORY (The "ESM Workaround")
// // import.meta.url is a URL (e.g., file:///C:/project/app.js)
// // fileURLToPath converts it to a System Path (e.g., C:\project\app.js)
// // path.dirname strips the filename to get just the folder
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// async function fileSystemTutorial() {
//     // 3. SECURE PATH RESOLUTION
//     // We combine the absolute __dirname with our relative targets
//     // path.join handles cross-platform slashes (\ vs /) automatically
//     const targetFolder = path.join(__dirname, 'tutorial_data');
//     const targetFile = path.join(targetFolder, 'example.txt');

//     try {
//         console.log(`Starting app from: ${process.cwd()}`);
//         console.log(`Resolved script folder: ${__dirname}`);

//         // --- CREATE ---
//         // Ensure the directory exists. { recursive: true } prevents errors if it exists.
//         await fs.mkdir(targetFolder, { recursive: true });
        
//         // Write file. Using 'utf8' ensures it saves as text, not a Buffer.
//         await fs.writeFile(targetFile, 'Step 1: File created with an absolute path.\n', 'utf8');
//         console.log('✔ File Created');

//         // --- UPDATE ---
//         // Append doesn't overwrite; it adds to the end.
//         await fs.appendFile(targetFile, 'Step 2: New line added without breaking others.', 'utf8');
//         console.log('✔ File Updated');

//         // --- READ ---
//         const content = await fs.readFile(targetFile, 'utf8');
//         console.log('\n--- Final File Content ---');
//         console.log(content);
//         console.log('---------------------------\n');

//         // --- METADATA ---
//         const stats = await fs.stat(targetFile);
//         console.log(`Metadata: Size is ${stats.size} bytes.`);

//     } catch (error) {
//         // All errors (permission denied, disk full, etc.) land here
//         console.error('An error occurred:', error.message);
//     }
// }

// // Execute the tutorial
// fileSystemTutorial();

import fs, { readFile } from 'fs';

async function loadConfig() {
    const data = await readFile()
}