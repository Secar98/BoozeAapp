const getDrinks = async (alcholic: boolean) => {
  const type = alcholic ? 'Alcoholic' : 'Non_Alcoholic';
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`;
  const res = await fetch(url);
  return await res.json();
};

const getDrink = async (id: number) => {
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  return await res.json();
}

const getRandomDrink = async () => {
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const res = await fetch(url);
  return await res.json();
}

const getDrinkByName = async (search: string) => {
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  const res = await fetch(url);
  return await res.json();
}

const getDrinkWithIngredient = async (ingredient: string) => {
  const url: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  const res = await fetch(url);
  return await res.json();
}

export {
  getDrinks,
  getDrink,
  getRandomDrink,
  getDrinkByName,
  getDrinkWithIngredient
};