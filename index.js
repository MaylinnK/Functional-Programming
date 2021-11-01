function getData() {
  // Fetch dataset
  fetch("./dataset.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      editKeys("Wat is je oogkleur?", "eyecolour", data),
      cleanData([], data);
    });

}

getData();

function editKeys(old_key, new_key, data) {
  // Add new key with old key's value, remove old key
  data.map(function (submit) {
    if (old_key !== new_key) {
      Object.defineProperty(
        submit,
        new_key,
        Object.getOwnPropertyDescriptor(submit, old_key)
      );
      delete submit[old_key];
    }
    return data;
  });
}

function cleanData(eyecolours, data) {
  // Removes whitespace and capitalization
  data.map(function (submit) {
    eyecolours.push(submit.eyecolour.replace(/\s/g, "").toLowerCase());
    document.getElementById("test").innerHTML = eyecolours;
  });
  return eyecolours;
}


// function filter() {
//   filterValue = document.forms["filterForm"]["colour"].value;
//   console.log(filterValue)
//   if (filterValue == "") {
//     console.log("Hey");
//   } else {
//     console.log("Ho");
//     cleanData.filter(function () {
//       return eyecolours == filterValue;
//     });
//     console.log(filter);
//   }
// }

// document.querySelector("input").addEventListener("click", filter);
