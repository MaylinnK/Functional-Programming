const data = require("./dataset.json");
const old_key = "Wat is je oogkleur?";
const new_key = "oogkleur";
const oogkleuren = [];

for (let i = 0; i < data.length; i++) {
  if (old_key !== new_key) {
    Object.defineProperty(
      data[i],
      new_key,
      Object.getOwnPropertyDescriptor(data[i], old_key)
    );
    delete data[i][old_key];
  }
}
for (let i = 0; i < data.length; i++) {
  oogkleuren.push(data[i].oogkleur.replace(/\s/g, "").toLowerCase());
}

console.log(oogkleuren);
