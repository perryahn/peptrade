const Alpaca = require('@alpacahq/alpaca-trade-api');

class ApiClient {
  constructor() {
    this.alpaca = new Alpaca({
      keyId: process.env.ALPACA_API_KEY,
      secretKey: process.env.ALPACA_SECRET_KEY,
      paper: true,
    });
  }

  async account() {
    await this.alpaca.getAccount().then((res) => {
      console.log(res);
    });
  }
}

module.exports = ApiClient;