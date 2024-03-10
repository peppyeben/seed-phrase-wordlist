````markdown
# Seed Phrase Generator

This package provides a utility to generate a list of BIP-39 words for use in seed phrases.

## Installation

```bash
npm install seed-phrase-wordlist
```
````

## Usage

```javascript
const { getWordList } = require("seed-phrase-wordlist");

// Get a list of BIP-39 words
const wordList = getWordList();

console.log(wordList);
```

## API

### `getWordList()`

Returns a list of BIP-39 words.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
