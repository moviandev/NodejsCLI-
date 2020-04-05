const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');

const keyManager = new KeyManager();

const key = {
  async set() {
    const input = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'key',
          message: 'Enter API key'.green + 'https://nomics.com',
          validate: isRequired,
        },
      ])
      .catch((err) => {
        throw new Error(
          'Not possible to set a API Key, contact the maintainer',
          err.message,
        );
      });

    const key = keyManager.setKey(input.key);

    if (key) console.log('API Key Set'.blue);
  },
  show() {
    console.log('Hello from show');
  },
  remove() {
    console.log('Hello from remove');
  },
};

module.exports = key;
