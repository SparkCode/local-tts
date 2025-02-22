#!/usr/bin/env node
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check if OPENAI_API_KEY is set
if (!process.env.OPENAI_API_KEY) {
    console.error('Error: OPENAI_API_KEY environment variable is not set');
    process.exit(1);
}

// Get input text from command line arguments
const inputText = process.argv.slice(2).join(' ');

if (!inputText) {
    console.error('Error: Please provide text to convert to speech');
    console.error('Usage: node index.js "Your text here"');
    process.exit(1);
}

const openai = new OpenAI();
// Generate filename from text input
const sanitizeFilename = (text) => 
    text.slice(0, 40)
        .replace(/[^a-z0-9]/gi, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();

const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const filename = `${sanitizeFilename(inputText)}-${timestamp}.mp3`;
const speechFile = path.resolve(__dirname, filename);

// Available voices
const voices = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];

async function convertTextToSpeech() {
    try {
        // Select random voice
        const randomVoice = voices[Math.floor(Math.random() * voices.length)];
        console.log(`Converting text to speech using voice: ${randomVoice}...`);
        
        const mp3 = await openai.audio.speech.create({
            model: "tts-1",
            voice: randomVoice,
            input: inputText,
        });

        console.log('Saving audio file...');
        const buffer = Buffer.from(await mp3.arrayBuffer());
        await fs.promises.writeFile(speechFile, buffer);
        
        // Copy file to clipboard using osascript
        const { exec } = await import('child_process');
        const copyCmd = `osascript -e 'set the clipboard to (read (POSIX file "${speechFile}") as «class MpTr»)'`;
        exec(copyCmd, (error) => {
            if (error) {
                console.warn('Warning: Could not copy audio file to clipboard');
            } else {
                console.log('Audio file copied to clipboard');
            }
        });
        
        console.log(`Success! Audio saved to: ${speechFile}`);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

convertTextToSpeech();
