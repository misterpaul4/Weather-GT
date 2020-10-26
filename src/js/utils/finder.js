const finder = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=72f817be934d7453dd9541046842672c&units=metric`;
  const fetchedData = await (await fetch(url)).json();
  return fetchedData;
};

export default finder;
