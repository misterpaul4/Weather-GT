import renderBackground from './background';
import clock from './clock';
import temperature from './temperature';
import search from './search';

// eslint-disable-next-line no-unused-vars
const render = (() => {
  const background = renderBackground();

  document.body.appendChild(background);
  background.appendChild(search());
  background.appendChild(clock());
  background.appendChild(temperature());
})();

// async function getWeather(location) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=72f817be934d7453dd9541046842672c&units=metric`;
//   const fetchedData = await (await fetch(url)).json();
//   return fetchedData;
// }

// getWeather('London').then(data => {
//   console.log(data.main.temp);
// });