import moment from 'moment';

export default function () {
  const clock = document.createElement('div');

  const renderClock = () => {
    clock.innerHTML = `<h2>${moment().format('dddd, h:mm:ss a')}</h2>`;
  };
  setInterval(renderClock, 1000);

  clock.className = 'border px-4 py-3';

  return clock;
}