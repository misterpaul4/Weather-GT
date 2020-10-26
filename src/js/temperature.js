/* eslint-disable no-multi-assign */

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
  const extrasContainer = document.createElement('div');
  const feelslikeContainer = document.createElement('div');
  const feelslike = document.createElement('span');
  const feelslikeValue = document.createElement('span');
  const feelslikeUnit = document.createElement('span');
  const maxTempContainer = document.createElement('div');
  const maxTemp = document.createElement('span');
  const maxTempValue = document.createElement('span');
  const maxTempUnit = document.createElement('span');
  const minTempContainer = document.createElement('div');
  const minTemp = document.createElement('span');
  const minTempValue = document.createElement('span');
  const minTempUnit = document.createElement('span');
  const humidityContainer = document.createElement('div');
  const humidity = document.createElement('span');
  const humidityValue = document.createElement('span');
  const description = document.createElement('div');

  temperature.className = 'temperature';
  unitContainer.className = 'unit-container';
  seperator.className = 'seperator';
  celsius.className = 'unit';
  fahrehnheit.className = 'unit inactive-unit';
  container.className = 'text-center';
  cityContainer.className = 'city';
  tempteratureContainer.className = 'temp-container';
  extrasContainer.className = 'extras';
  description.className = 'description';

  celsius.textContent = '°C';
  fahrehnheit.textContent = '°F';
  maxTemp.textContent = 'max: ';
  feelslike.textContent = 'feels like: ';
  minTemp.textContent = 'min: ';
  humidity.textContent = 'humidity: ';

  unitContainer.appendChild(celsius);
  unitContainer.appendChild(seperator);
  unitContainer.appendChild(fahrehnheit);

  cityContainer.appendChild(city);
  cityContainer.appendChild(contry);

  feelslikeContainer.appendChild(feelslike);
  feelslikeContainer.appendChild(feelslikeValue);
  feelslikeContainer.appendChild(feelslikeUnit);

  maxTempContainer.appendChild(maxTemp);
  maxTempContainer.appendChild(maxTempValue);
  maxTempContainer.appendChild(maxTempUnit);

  minTempContainer.appendChild(minTemp);
  minTempContainer.appendChild(minTempValue);
  minTempContainer.appendChild(minTempUnit);

  humidityContainer.appendChild(humidity);
  humidityContainer.appendChild(humidityValue);

  extrasContainer.appendChild(feelslikeContainer);
  extrasContainer.appendChild(maxTempContainer);
  extrasContainer.appendChild(minTempContainer);
  extrasContainer.appendChild(humidityContainer);

  tempteratureContainer.appendChild(description);
  tempteratureContainer.appendChild(temperature);
  tempteratureContainer.appendChild(unitContainer);
  tempteratureContainer.appendChild(extrasContainer);

  container.appendChild(tempteratureContainer);
  container.appendChild(cityContainer);

  const resetUnit = () => {
    tempIsCelsius = true;
    fahrehnheit.classList.add('inactive-unit');
    celsius.classList.remove('inactive-unit');
  };

  const toCelcius = (item) => Math.round((Number(item) - 32) * (5 / 9));

  const toFahrehnheit = (item) => Math.round((Number(item) * (9 / 5)) + 32);

  celsius.addEventListener('click', () => {
    if (!tempIsCelsius) {
      temperature.textContent = toCelcius(temperature.textContent);
      feelslikeValue.textContent = toCelcius(feelslikeValue.textContent);
      maxTempValue.textContent = toCelcius(maxTempValue.textContent);
      minTempValue.textContent = toCelcius(minTempValue.textContent);
      minTempUnit.textContent = maxTempUnit.textContent = feelslikeUnit.textContent = '°C';
      resetUnit();
    }
  });

  fahrehnheit.addEventListener('click', () => {
    if (tempIsCelsius) {
      temperature.textContent = toFahrehnheit(temperature.textContent);
      feelslikeValue.textContent = toFahrehnheit(feelslikeValue.textContent);
      maxTempValue.textContent = toFahrehnheit(maxTempValue.textContent);
      minTempValue.textContent = toFahrehnheit(minTempValue.textContent);
      celsius.classList.add('inactive-unit');
      fahrehnheit.classList.remove('inactive-unit');
      minTempUnit.textContent = maxTempUnit.textContent = feelslikeUnit.textContent = '°F';
      tempIsCelsius = false;
    }
  });

  const update = (location) => {
    city.textContent = location.name;
    contry.textContent = `, ${location.sys.country}`;
    temperature.textContent = Math.round(location.main.temp);
    description.textContent = location.weather[0].description;
    feelslikeValue.textContent = Math.round(location.main.feels_like);
    maxTempValue.textContent = Math.round(location.main.temp_max);
    minTempValue.textContent = Math.round(location.main.temp_min);
    humidityValue.textContent = `${location.main.humidity}%`;
    minTempUnit.textContent = maxTempUnit.textContent = feelslikeUnit.textContent = '°C';
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