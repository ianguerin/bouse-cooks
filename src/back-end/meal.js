const axios = require('axios');
const cheerio = require('cheerio');

const getSuggestions = async page => {
  const recipesUrl = `https://www.epicurious.com/search?meal=dinner&page=${page}&special-consideration=quick-and-easy`;

  try {
    const { data } = await axios.get(recipesUrl);
    const recipeItems = cheerio('.recipe-panel .show-quick-view', data);
    const recipes = [];

    for (let i = 0; i < Math.min(4, recipeItems.length); i++) {
      recipes.push({
        href: `https://www.epicurious.com${recipeItems[i].attribs.href}`,
        title: recipeItems[i].attribs.title
      });
    }

    return recipes;
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = {
  getSuggestions
};
