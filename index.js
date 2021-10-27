function loopEdit(old_key, new_key, eyecolours) {
  old_key = "Wat is je oogkleur?";
  new_key = "eyecolour";
  eyecolours = ['gsdf', 'test', 'waarom werkt dit niet'];

  fetch("./dataset.json")
    .then((response) => response.json())
    .then (function (data)
  {
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
      eyecolours.push(data[i].eyecolour.replace(/\s/g, "").toLowerCase());
    }
  });

  console.log(eyecolours);
  document.getElementById('test').innerHTML = eyecolours;
}
loopEdit();