
```markdown
# Seed Phrase Generator

This package provides a utility to generate a shuffled list of BIP-39 words for use in seed phrases.

## Installation

```bash
npm install seed-phrase-wordlist
```

## Usage

```javascript
const { getWordList } = require('seed-phrase-wordlist');

// Get a list of BIP-39 words
const wordList = getWordList();

console.log(wordList);
```

## API

### `getWordList()`

Returns a list of BIP-39 words.

## Dependencies

- [lodash](https://lodash.com/): A modern JavaScript utility library delivering modularity, performance, and extras.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

[MIT](LICENSE)
```
