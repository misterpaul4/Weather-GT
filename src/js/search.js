import '../css/search.css';
import temperature from './temperature';
import getLocation from './utils/finder';

export default function () {
  const container = document.createElement('div');
  const searchIcon = document.createElement('div');
  const searchInput = document.createElement('input');
  const formContainer = document.createElement('form');
  const warningContainer = document.createElement('div');
  const warningIcon = document.createElement('span');
  const warningMessage = document.createElement('span');

  searchIcon.setAttribute('type', 'submit');

  container.className = 'search-container';
  searchIcon.className = 'icon light-icon';
  formContainer.className = 'p-3';
  searchInput.className = 'hide-input px-2';
  warningContainer.className = 'warning';
  warningIcon.className = 'warning-icon';

  warningMessage.textContent = 'location not found! check spelling';

  formContainer.appendChild(searchInput);
  formContainer.appendChild(searchIcon);
  formContainer.appendChild(warningContainer);
  warningContainer.appendChild(warningIcon);
  warningContainer.appendChild(warningMessage);
  container.appendChild(formContainer);
  // container.appendChild(warningContainer);

  function updateTemperature() {
    if (searchInput.value !== '') {
      getLocation(searchInput.value).then(location => {
        if( valid(location) ) { temperature.update(location); } else { alert(); }
      });
    }
  }

  function valid(location) {
    if (location.cod === '404') { return false; }
    return true;
  }

  function alert() {
    // display warning
  }

  let searchFieledClosed = true;

  searchIcon.addEventListener('click', () => {
    updateTemperature();
    if (searchFieledClosed) {
      searchInput.style.visibility = 'visible';
      searchInput.style.width = '170px';
      searchIcon.classList.remove('light-icon');
      searchIcon.classList.add('dark-icon', 'ml-2');
      searchIcon.style.transform = 'rotate(360deg)';
      formContainer.style.backgroundColor = 'lightgray';
    } else { searchFieledClosed = false }
  });

  formContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    updateTemperature();
  });

  return container;
}
