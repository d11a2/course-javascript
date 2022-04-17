function loadAndSortTowns() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json',
    true
  );
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}

loadAndSortTowns();
