const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

const keyManager = new KeyManager();

const key = {
  async set() {
    const input = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'key',
          message: 'Enter API key'.green + ' https://nomics.com ',
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
    try {
      const key = keyManager.getKey();

      console.log('The actual key is:', key.yellow);

      return key;
    } catch (err) {
      throw new Error(err.message.red);
    }
  },
  remove() {
    try {
      keyManager.removeKey();
      console.log('Key has been removed'.magenta);
      return;
    } catch (err) {
      throw new Error(err.message.red);
    }
  },
};

module.exports = key;
