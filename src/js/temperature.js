
import '../css/temperature.css';
import getLocation from './utils/finder';

const render = (() => {
  let tempIsCelsius = true;
  const container = document.createElement('div');
  const tempteratureContainer = document.createElement('div');
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
  container.className = 'text-center';
  cityContainer.className = 'city';
  tempteratureContainer.className = 'temp-container';

  celsius.textContent = '°C';
  fahrehnheit.textContent = '°F';

  unitContainer.appendChild(celsius);
  unitContainer.appendChild(seperator);
  unitContainer.appendChild(fahrehnheit);
  cityContainer.appendChild(city);
  cityContainer.appendChild(contry);
  tempteratureContainer.appendChild(temperature);
  tempteratureContainer.appendChild(unitContainer);
  container.appendChild(tempteratureContainer);
  container.appendChild(cityContainer);

  function resetUnit() {
    tempIsCelsius = true;
    fahrehnheit.classList.add('inactive-unit');
    celsius.classList.remove('inactive-unit');
  }

  celsius.addEventListener('click', () => {
    if (!tempIsCelsius) {
      temperature.textContent = Math.round((Number(temperature.textContent) - 32) * (5 / 9));
      resetUnit();
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

  const update = (location) => {
    city.textContent = location.name;
    contry.textContent = `, ${location.sys.country}`;
    temperature.textContent = Math.round(location.main.temp);
    resetUnit();
  };

  const setDefault = (location) => {
    getLocation(location).then(locationObj => {
      update(locationObj);
    });
  };

  return { container, update, setDefault };
})();

export default render;