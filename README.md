# CryptoCurrency NodeJS CLI

Project to display in your Terminal crypto currency of the day and the rank of itself.

## Installing

To install this app is necessary to have Node and NPM installed.

Installing the application:
`$ npm i`

After running `$ npm install` run `$ npm link`.

## Running

To run this aplication is necessary to have a key of [Nomics](https://nomics.com), after getting the key you can run the command:

`$ cryptoCurrency key set`

You should get a return like this:
`? Enter API key https://nomics.com:`
Then you should paste your API Key in front of it.

After doing that you can use the application.

## Using the app

To check the app version you can run:
`$ cryptoCurrency -V`

To check the top three currency you can run this command
`$ cryptoCurrency check price`

Then you should get a result like this:

```
 Coin: BTC (Coin name: Bitcoin | Price: R$36,178.58 | Rank: 1)
 Coin: ETH (Coin name: Ethereum | Price: R$763.56 | Rank: 2)
 Coin: XRP (Coin name: Ripple | Price: R$0.96 | Rank: 3)
```

At first you'll get the result in Brazilian currency to change it you can run this command:
`$ cryptoCurrency check price --cur=USD`

To filter by crypto coin you can run:
`$ cryptoCurrency check price --coin=BTC`

To filter by crypto coin and currency you can run:
`$ cryptoCurrency check price --coin=BTC --cur=USD`

## Help

To get more help you can run `$ cryptoCurrency help`

To get more help about the commands you can as them like this: `$ cryptoCurrency [command] || [command] help`

## Contact Info

To learn more about me and my projects you can find me on [Linkedin](https://www.linkedin.com/in/matheusviana) or you can send me an email: matheus_o_viana@hotmail.com.
