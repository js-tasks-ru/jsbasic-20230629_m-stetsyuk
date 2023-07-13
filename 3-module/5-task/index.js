function getMinMax(str) {
  const filteredNumbers = str.split(' ').filter(val => !isNaN(val)).map(val => +val);

  return {
    min: Math.min(...filteredNumbers),
    max: Math.max(...filteredNumbers)
  };
}
