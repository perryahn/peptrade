export const dollar = (amount) => {
  if (amount == null) {
    return '';
  }

  let formatMe = amount;

  if (typeof (formatMe) !== 'number') {
    formatMe = parseFloat(formatMe, 10);

    if (Number.isNaN(formatMe)) {
      return '';
    }
  }

  // adds commas
  // regex from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  return `$${formatMe.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};

export default dollar;
