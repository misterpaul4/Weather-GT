
import './css/temperature.css';

export default function () {
  const container = document.createElement('div');
  const temp = document.createElement('div');
  const city = document.createElement('div');
  const unitContainer = document.createElement('div');
  const celsius = document.createElement('span');
  const seperator = document.createElement('span');
  const fahrehnheit = document.createElement('span');

  temp.className = 'temperature';
  unitContainer.className = 'unit-container';
  seperator.className = 'seperator';
  celsius.className = 'unit';
  fahrehnheit.className = 'unit';
  container.className = 'text-center';
  city.className = 'city';

  temp.textContent = '30';
  celsius.textContent = '°C';
  fahrehnheit.textContent = '°F';
  city.textContent = 'Kampala, KY';

  unitContainer.appendChild(celsius);
  unitContainer.appendChild(seperator);
  unitContainer.appendChild(fahrehnheit);
  temp.appendChild(unitContainer);
  container.appendChild(temp);
  container.appendChild(city);

  return container;
}