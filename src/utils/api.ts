const getDrinks = async (alcholic: boolean) => {
  const type = alcholic ? 'Alcoholic' : 'Non_Alcoholic';
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`;
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

const getDrink = async (id: number) => {
  try {
    const url: string = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export { getDrinks, getDrink };