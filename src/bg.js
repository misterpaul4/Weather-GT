import './css/bg.css';
import moment from 'moment';

export default function () {
  const container = document.createElement('div');
  const clock = document.createElement('div');

  const renderClock = () => {
    clock.innerHTML = `<h2>${moment().format('dddd, h:mm:ss a')}</h2>`;
  };
  setInterval(renderClock, 1000);

  container.className = 'background bg-img';
  clock.className = 'border px-4 py-3';

  container.appendChild(clock);
  document.body.appendChild(container);

  // return renderClock;""
}
