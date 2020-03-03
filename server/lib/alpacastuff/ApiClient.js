const Alpaca = require('@alpacahq/alpaca-trade-api');

class ApiClient {
  constructor() {
    this.alpaca = new Alpaca({
      keyId: process.env.ALPACA_API_KEY,
      secretKey: process.env.ALPACA_SECRET_KEY,
      paper: true,
    });
  }

  async getAccount() {
    let result = null;

    await this.alpaca.getAccount().then((res) => {
      result = res;
    });

    return result;
  }

  async getActivities(types) {
    let result = null;

    await this.alpaca.getAccountActivities({
      activityTypes: types || [],
    }).then((res) => {
      result = res;
    });

    return result;
  }

  async getOrders({
    startDate, endDate,
  }) {
    let result = null;

    await this.alpaca.getOrders({
      after: startDate,
      until: endDate,
    }).then((res) => {
      result = res;
    });

    return result;
  }

  async getPositions() {
    let result = null;

    await this.alpaca.getPositions().then((res) => {
      result = res;
    });

    return result;
  }

  async getBars({
    symbols, start, end,
  }) {
    let result = null;

    await this.alpaca.getBars({
      symbols,
      start,
      end,
    }).then((res) => {
      result = res;
    });

    return result;
  }

  async placeOrder(order) {
    let result = null;
    await this.alpaca.createOrder(order).then((res) => {
      result = res;
    });

    return result;
  }
}

module.exports = ApiClient;
