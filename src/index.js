import renderBackground from './js/background';
import clock from './js/clock';
import temperature from './js/temperature';
import search from './js/search';

// eslint-disable-next-line no-unused-vars
const render = (() => {
  const background = renderBackground();

  document.body.appendChild(background);
  background.appendChild(search());
  background.appendChild(clock());

  temperature.setDefault('lagos');
  background.appendChild(temperature.container);
})();
