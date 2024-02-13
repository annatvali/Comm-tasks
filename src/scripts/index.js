const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

const root = document.querySelector('body');
const itemsContainer = createDiv('item-container');
root.append(itemsContainer);

async function fetchData(url) {
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

function createDiv(className) {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
}

function createCard(movie, isDetailed = false) {
  const { title, overview, poster_path, vote_average, id } = movie;
  const card = createDiv('card');
  const ratingClass = getRatingClass(vote_average);
  card.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="card__details">
      <div>
        <h3 class="card__title">${title}</h3>
        <span class="card__rating ${ratingClass}">${vote_average.toFixed(1)}</span>
      </div>
      <div>
        <h3 class="card__overview">Overview</h3>
        <p>${overview}</p>
      </div>
    </div>
  `;
  if (!isDetailed) {
    card.addEventListener('click', () => redirectToDetails(id));
  }
  return card;
}

function renderCards(data) {
  const cardList = createDiv('card-list');
  data.results.forEach(movie => {
    const card = createCard(movie);
    cardList.append(card);
  });
  itemsContainer.innerHTML = '';
  itemsContainer.append(cardList);
}

function redirectToDetails(id) {
  window.location.href = `index.html?id=${id}`;
}

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id');
  if (movieId) {
    const itemData = await fetchData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`);
    const card = createCard(itemData, true);
    itemsContainer.innerHTML = '';
    itemsContainer.append(card);
    card.classList.remove('card');
    card.classList.add('card_large');
    const backHomeLink = document.createElement('a');
    backHomeLink.classList.add('back-home-link');
    backHomeLink.href = 'index.html';
    backHomeLink.textContent = '🔙 Back Home';
    root.insertBefore(backHomeLink, searchForm.form);
  } else {
    const data = await fetchData(API_URL);
    renderCards(data);
  }
}

function createSearchForm() {
  const form = document.createElement('form');
  form.classList.add('search-form');
  form.setAttribute('id', 'form');
  const search = document.createElement('input');
  search.classList.add('search-form__input');
  search.setAttribute('id', 'search');
  search.setAttribute('type', 'text');
  search.setAttribute('placeholder', 'Search...');
  const button = document.createElement('button');
  button.classList.add('search-form__button');
  button.textContent = 'Search';
  form.append(search);
  form.append(button);
  root.insertBefore(form, itemsContainer);
  return { form, search, button };
}

function handleSearch({ form, search }) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm.trim()) {
      const data = await fetchData(SEARCH_API + searchTerm);
      renderCards(data);
      search.value = '';
    }
  });
}

function getRatingClass(vote) {
  if(vote >= 7) {
    return 'green';
  } else if(vote >= 6) {
    return 'yellow';
  } else {
    return 'red';
  }
}

const searchForm = createSearchForm();
handleSearch(searchForm);
init();