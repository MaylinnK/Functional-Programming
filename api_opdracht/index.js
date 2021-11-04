function getData() {
  // Fetch Pokemon berries dataset
  fetch("https://pokeapi.co/api/v2/berry/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getUrls([], [], data.results);
    });
}

getData();

function getUrls(berries, urls, data) {
  // Haalt alle berries op bij nummer.
  berries = Object.keys(data);
  // Haalt per berry de url naar detail pagina op.
  berries.map(function (berry) {
    urls.push(data[berry].url);
  });
  // Geeft urls mee aan getBerryData en roept hem aan.
  getBerryData(urls);
}

// Loopt door de detail pagina urls en haalt de data per url op.
function getBerryData(urls) {
  let berryData = [];
  urls.map(function (url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Haalt de name en firmness op uit de urls.
        let berryDataLoop = {
          id: url,
          name: data.name,
          firmness: data.firmness.name,
        };
        const flavors = data.flavors;
        // Loopt door de verschillende flavors en pakt de flavor met de hoogste potency eruit.
        for (let i = 0; i < flavors.length; i++) {
          const potency = Math.max(
            flavors[0].potency,
            flavors[1].potency,
            flavors[2].potency,
            flavors[3].potency,
            flavors[4].potency
          );
          // Neemt de hoogste potency en voegt de bijpassende flavour aan de array toe.
          if (potency == flavors[i].potency) {
            berryDataLoop.flavour = flavors[i].flavor.name;
          }
        }
        // Pusht de data in een array om mee te geven aan volgende functie
        berryData.push(berryDataLoop);
      });
  });
  showData(berryData);
}



// IGNORRREEEE (werkt niet)
function showData(berryData) {
  const url = "https://pokeapi.co/api/v2/berry/";
  berryData.push({
    name: "blueberry",
    cheese: "yes",
  });
  console.log(berryData);
  console.log(berryData.length)
}
// https://stackoverflow.com/questions/57198332/select-a-property-from-an-array-of-objects-based-on-a-value-javascript

// for (let i = 0; i < berryData.length; i++) {
  //   console.log(berry.name)
  // };
  // berryData.map(function (berry) {
  //   console.log(berryData)
  //   let newArticle = document.createElement("article");
  //   let addData = document.createTextNode(berry);
  //   newArticle.appendChild(addData);
  //   let currentArticle = document.getElementById("test");
  //   document.section.insertBefore(newArticle, currentArticle);
  //   console.log("done");
  // });