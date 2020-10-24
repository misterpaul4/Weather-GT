
import '../css/temperature.css';

const render = (() => {
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
  fahrehnheit.className = 'unit';
  container.className = 'text-center temp-container';
  cityContainer.className = 'city';

  temperature.textContent = '30';
  celsius.textContent = '°C';
  fahrehnheit.textContent = '°F';
  city.textContent = 'Kampala';
  contry.textContent = ', KA';

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

  return { container, update };
})();

export default render;