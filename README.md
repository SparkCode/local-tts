# Text-to-Speech CLI

A command-line tool that converts text to speech using OpenAI's TTS API.

## Features

- Converts text to natural-sounding speech using OpenAI's TTS API
- Randomly selects from multiple voices (alloy, echo, fable, onyx, nova, shimmer)
- Generates organized filenames with text preview and timestamp
- Automatically copies audio file reference to clipboard
- Saves audio files locally for backup and reuse

## Quick Install

1. Clone and install globally:
   ```bash
   git clone https://github.com/yourusername/tts.git
   cd tts
   npm install
   npm link
   ```

2. Add OpenAI API key to your shell configuration:
   ```bash
   # For zsh (macOS default)
   echo 'export OPENAI_API_KEY="your-openai-api-key-here"' >> ~/.zshrc
   
   # Load the new environment variable
   source ~/.zshrc
   ```

That's it! Now you can use the `tts` command from anywhere.

## Usage

Convert text to speech:
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
