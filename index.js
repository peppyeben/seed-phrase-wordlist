const _ = require("lodash");
const { bip39WordList: wordlist } = require("./wordlist");

function getWordList() {
  return _.shuffle(wordlist);
}

module.exports = { getWordList };
