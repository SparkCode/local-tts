# Text-to-Speech CLI with Anki Integration

A command-line tool that converts text to speech using OpenAI's TTS API, designed specifically for creating audio files for Anki flashcards.

## Features

- Converts text to natural-sounding speech using OpenAI's TTS API
- Randomly selects from multiple voices (alloy, echo, fable, onyx, nova, shimmer)
- Generates organized filenames with text preview and timestamp
- Automatically copies audio to clipboard for easy pasting into Anki
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

### Anki Integration

1. Run the command with your desired text
2. Switch to Anki
3. Create or edit a card
4. Paste (⌘V) directly into any field - the file will be imported
5. The MP3 file remains in the assets directory for backup

## Output

- Files are saved in the `assets` directory with descriptive names:
  ```
  assets/your-text-YYYY-MM-DDTHH-mm-ss.mp3
  ```
- File reference is copied to clipboard for direct import into Anki
- Progress and status messages are displayed during conversion
- Files are organized by text content and timestamp

## Requirements

- Node.js
- macOS (for clipboard integration)
- OpenAI API key
