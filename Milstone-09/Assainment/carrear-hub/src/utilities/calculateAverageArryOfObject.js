const calculateAverage = (array, property) => {
  const total = array.reduce((acc, obj) => acc + obj[property], 0);
  const average = total / array.length;
  return average.toFixed(2);
};

export default calculateAverage;
