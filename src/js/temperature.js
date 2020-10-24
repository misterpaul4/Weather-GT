
import '../css/temperature.css';
import getLocation from './utils/finder';

const render = (() => {
  let tempIsCelsius = true;
  const container = document.createElement('div');
  const temperature = document.createElement('div');
  const cityContainer = document.createElement('div');
  const city = document.createElement('span');
  const contry = document.createElement('span');
  const unitContainer = document.createElement('div');
  const celsius = document.createElement('span');
  const seperator = document.createElement('span');
  const fahrehnheit = document.createElement('span');

  temperature.className = 'temperature';
  unitContainer.className = 'unit-container';
  seperator.className = 'seperator';
  celsius.className = 'unit';
  fahrehnheit.className = 'unit inactive-unit';
  container.className = 'text-center temp-container';
  cityContainer.className = 'city';

  celsius.textContent = '°C';
  fahrehnheit.textContent = '°F';

  unitContainer.appendChild(celsius);
  unitContainer.appendChild(seperator);
  unitContainer.appendChild(fahrehnheit);
  cityContainer.appendChild(city);
  cityContainer.appendChild(contry);
  container.appendChild(unitContainer);
  container.appendChild(temperature);
  container.appendChild(cityContainer);

  const update = (location) => {
    city.textContent = location.name;
    contry.textContent = `, ${location.sys.country}`;
    temperature.textContent = Math.round(location.main.temp);
  };

  const setDefault = (location) => {
    getLocation(location).then(locationObj => {
      update(locationObj);
    });
  };

  celsius.addEventListener('click', () => {
    if (!tempIsCelsius) {
      temperature.textContent = Math.round((Number(temperature.textContent) - 32) * (5 / 9));
      fahrehnheit.classList.add('inactive-unit');
      celsius.classList.remove('inactive-unit');
      tempIsCelsius = true;
    }
  });

  fahrehnheit.addEventListener('click', () => {
    if (tempIsCelsius) {
      temperature.textContent = Math.round((Number(temperature.textContent) * (9 / 5)) + 32);
      celsius.classList.add('inactive-unit');
      fahrehnheit.classList.remove('inactive-unit');
      tempIsCelsius = false;
    }
  });

  return { container, update, setDefault };
})();

export default render;