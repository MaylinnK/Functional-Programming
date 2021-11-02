function getData() {
  // Fetch Pokemon berries dataset
  fetch("https://pokeapi.co/api/v2/berry/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getUrls([], [], data.results); // Pushes berry URL's into an array
      getBerryData([]); // Loops through arrays and extracts data from them
    });
}

getData();

function getUrls(berries, urls, data) {
  berries = Object.keys(data);
  //   console.log(berries)
  berries.map(function (berry) {
    urls.push(data[berry].url);
  });
  return urls
}

function getBerryData(urls) {
  setTimeout(function () {
    urls = getUrls;
    console.log(urls)
  }, 2000);
}
