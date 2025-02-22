# Text-to-Speech CLI

A command-line tool that converts text to speech using OpenAI's TTS API.

## Features

- Converts text to natural-sounding speech using OpenAI's TTS API
- Randomly selects from multiple voices (alloy, echo, fable, onyx, nova, shimmer)
- Generates organized filenames with text preview and timestamp
- Automatically copies audio file reference to clipboard
- Saves audio files locally for backup and reuse

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your OpenAI API key:
   ```bash
   export OPENAI_API_KEY='your-api-key-here'
   ```
4. Make the command globally available (optional):
   ```bash
   npm link
   ```

## Usage

Basic usage:
```bash
node index.js "Your text to convert to speech"
```

Or if globally installed:
```bash
tts "Your text to convert to speech"
```

## Output

- Files are saved in the `assets` directory with descriptive names:
  ```
  assets/your-text-YYYY-MM-DDTHH-mm-ss.mp3
  ```
- File reference is copied to clipboard
- Progress and status messages are displayed during conversion
- Files are organized by text content and timestamp

## Requirements

- Node.js
- macOS (for clipboard integration)
- OpenAI API key
