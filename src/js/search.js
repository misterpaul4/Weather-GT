import '../css/search.css';

export default function () {
  const container = document.createElement('div');
  const searchIcon = document.createElement('div');
  const searchInput = document.createElement('input');
  const formContainer = document.createElement('form');

  searchIcon.setAttribute('type', 'submit');

  container.className = 'search-container p-3';
  searchIcon.className = 'icon ml-2';
  formContainer.className = 'd-flex';

  formContainer.appendChild(searchInput);
  formContainer.appendChild(searchIcon);
  container.appendChild(formContainer);

  const findLocation = async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=72f817be934d7453dd9541046842672c&units=metric`;
    const fetchedData = await (await fetch(url)).json();
    return fetchedData;
  };

  searchIcon.addEventListener('click', () => {
    findLocation(searchInput.value).then(data => {
      // action
    });
  });

  formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    findLocation(searchInput.value).then(data => {
      // action
    });
  });

  return container;
}
