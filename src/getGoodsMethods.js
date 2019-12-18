const getGoods = () => {
  const GoodsApi = 'https://mate-academy.github.io/'
  + 'react_dynamic-list-of-goods/goods.json';

  return fetch(GoodsApi)
    .then(response => response.json())
    .then(data => data);
};

const LoadeRedGoods = () => {
  const GoodsApi = 'https://mate-academy.github.io/'
  + 'react_dynamic-list-of-goods/goods.json';

  return fetch(GoodsApi)
    .then(response => response.json())
    .then(data => data.filter(good => good.color === 'red'));
};

const Load5FirstGoods = () => {
  const GoodsApi = 'https://mate-academy.github.io/'
  + 'react_dynamic-list-of-goods/goods.json';

  return fetch(GoodsApi)
    .then(response => response.json())
    .then(data => data
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5));
};

export { getGoods, LoadeRedGoods, Load5FirstGoods };
