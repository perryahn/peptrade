const { Dataset } = require('data.js');

const path = 'https://datahub.io/core/s-and-p-500-companies/datapackage.json';

class Sp500DataClient {
  result = [];

  sp500stream = async () => {
    const dataset = await Dataset.load(path);

    const jsonSource = dataset.resources.find((c) => (
      // eslint-disable-next-line no-underscore-dangle
      c._descriptor.name === 'constituents_json'
    ));

    if (!jsonSource) {
      return null;
    }

    const stream = await jsonSource.stream();

    return stream;
  }
}

module.exports = Sp500DataClient;
