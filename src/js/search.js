import '../css/search.css';
import temperature from './temperature';
import getLocation from './utils/finder';

export default function () {
  const container = document.createElement('div');
  const searchIcon = document.createElement('div');
  const searchInput = document.createElement('input');
  const formContainer = document.createElement('form');

  searchIcon.setAttribute('type', 'submit');

  container.className = 'search-container';
  searchIcon.className = 'icon light-icon';
  formContainer.className = 'd-flex p-3';
  searchInput.className = 'hide-input px-2';

  formContainer.appendChild(searchInput);
  formContainer.appendChild(searchIcon);
  container.appendChild(formContainer);

  function updateTemperature() {
    if (searchInput.value !== '') {
      getLocation(searchInput.value).then(location => {
        temperature.update(location);
      });
    }
  }

  searchIcon.addEventListener('click', () => {
    updateTemperature();
    searchInput.style.visibility = 'visible';
    searchInput.style.width = '200px';
    searchIcon.classList.remove('light-icon');
    searchIcon.classList.add('dark-icon', 'ml-2');
    searchIcon.style.transform = 'rotate(360deg)';
    container.style.backgroundColor = 'lightgray';
  });

  formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    updateTemperature();
  });

  return container;
}
