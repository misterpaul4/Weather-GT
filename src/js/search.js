import '../css/search.css';
import temperature from './temperature';
import getLocation from './utils/finder';

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

  searchIcon.addEventListener('click', () => {
    getLocation(searchInput.value).then(location => {
      // action
      temperature.update(location);
    });
  });

  formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    getLocation(searchInput.value).then(location => {
      // action
      temperature.update(location);
    });
  });

  return container;
}
