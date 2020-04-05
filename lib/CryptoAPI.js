const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOption, curOption) {
    try {
      //Formatter for currency
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: curOption,
      });

      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`,
      );
      let output = '';

      res.data.forEach((coin) => {
        output += `Coin: ${coin.symbol.yellow} (Coin name: ${
          coin.name.magenta
        } | Price: ${formatter.format(coin.price).green} | Rank: ${
          coin.rank
        })\n`;
      });

      return output;
    } catch (err) {
      this.handleAPIError(err);
    }
  }

  handleAPIError(err) {
    if (err.response.status === 401) {
      throw new Error('Your API Key is invalid - Go to https://nomics.com');
    } else if (err.response.status === 404) {
      throw new Error('Your API is not responding');
    } else {
      throw new Error('Something went wrong');
    }
  }
}

module.exports = CryptoAPI;
