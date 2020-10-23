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
