import renderBackground from './background';
import clock from './clock';
import temperature from './temperature';

// eslint-disable-next-line no-unused-vars
const render = (() => {
  const background = renderBackground();

  document.body.appendChild(background);
  background.appendChild(clock());
  background.appendChild(temperature());
})();
