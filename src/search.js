import './css/search.css';

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
  });

  formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  return container;
}