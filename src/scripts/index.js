const URL = 'https://fakestoreapi.com/products/';

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const productCards = createCards(data);
    displayCards(productCards);
  })
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

const createCards = (data) => {
  let productCards = '';
  data.forEach((product) => {
    productCards += `
      <div class="products__item">
        <img src="${product.image}" height="240" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p>Category: ${product.category}</p>
        <p>${product.description}</p>
        <p class="accent">Price: ${product.price}$</p>
        <p>Rating: ${product.rating.rate}/5 (${product.rating.count} vote)</p>
      </div>
      `;
  });
  return productCards;
};

const displayCards = (productCards) => {
  const productContainer = document.querySelector('.products');
  productContainer.innerHTML += productCards;
};
