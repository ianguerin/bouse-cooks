const axios = require('axios');

const meal = require('../meal');

jest.mock('axios', () => ({
  get: jest.fn(() => ({ data: '' }))
}));

jest.mock('cheerio', () =>
  jest.fn(() => [
    { attribs: { title: 'Example 1', href: '/recipes/for/the/test' } }
  ])
);

describe('Meal module', () => {
  describe('getSuggestions function', () => {
    it('retrieves four recipes from epicurious.com', () => {
      const page = 0;
      const expectedUrl = `https://www.epicurious.com/search?meal=dinner&page=${page}&special-consideration=quick-and-easy`;
      const expectedSuggestions = [
        {
          href: 'https://www.epicurious.com/recipes/for/the/test',
          title: 'Example 1'
        }
      ];

      return meal.getSuggestions(0).then(suggestions => {
        expect(axios.get).toHaveBeenCalledWith(expectedUrl);
        expect(suggestions).toEqual(expectedSuggestions);
      });
    });
  });
});
