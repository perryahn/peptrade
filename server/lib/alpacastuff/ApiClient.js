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
    let result = null;

    await this.alpaca.getAccount().then((res) => {
      result = res;
    });

    return result;
  }

  async activities(types) {
    let result = null;

    await this.alpaca.getAccountActivities({
      activityTypes: [],
    }).then((res) => {
      result = res;
    });

    return result;
  }
}

module.exports = ApiClient;
