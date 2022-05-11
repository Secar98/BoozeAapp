const getIngredients = (ingredients, filter: string) => {
  return Object.entries(ingredients).filter(
    (item) => item[0].includes(filter) && item[1] !== null && item[1] !== ""
  );
};

const getMeasurements = (measurements, filter: string) => {
  return Object.entries(measurements).filter((item) => item[0].includes(filter));
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

export { getIngredients, getMeasurements, shuffleArray }