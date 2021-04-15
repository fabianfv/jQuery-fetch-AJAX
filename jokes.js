const btnjQueryAJAX = document.getElementById("btnjQueryAJAX")
const btnFetchAJAX = document.getElementById("btnFetchAJAX")
const jQueryViewer = document.getElementById("jQueryViewer")
const fetchViewer = document.getElementById("fetchViewer")
const apiURL = "https://api.icndb.com/jokes/random"

btnjQueryAJAX.onclick = getJokeUsingjQuery
btnFetchAJAX.onclick = getJokeUsingFetch

/*
const jQueryWrite = joke => jQueryViewer.textContent = joke.replaceAll("&quot;", '"')
const fetchWrite = joke => fetchViewer.textContent = joke.replaceAll("&quot;", '"')
*/
function writeToDOM(htmlElement, joke) {
  try {
    htmlElement.textContent = joke.replaceAll("&quot;", '"');
  } catch (err) {
    htmlElement.textContent = err;
  }
}

//This api doesn't seem to return any errors
function getJokeUsingjQuery() {
  /*
  $.ajax({
    url: apiURL,
    type: "get",
    dataType: "json",
    error: (xhr, textStatus, error) => jQueryWrite(`${textStatus:} ${error}`),
    success: data => jQueryWrite(data.value.joke)
  });
  */
  
  /* $.get y $.get.JSON son abreviaturas de $.ajax
  *  La diferencia entre estos 2 metodos es que $.get devuelve la respuesta en su formato original
  *  mientras que $.getJSON intenta convertir el formato a JSON
  */
  
  // En este caso se usa el método $.get con una función callback, pero también se pueden usar
  // los métodos .done, .fail, .always (.done y .fail: promesas)
  //$.get(apiURL, data => jQueryWrite(data.value.joke));
  $.getJSON(apiURL)
    .done(data => writeToDOM(jQueryViewer, data.value.joke))
    .fail(err => writeToDOM(jQueryViewer, err));

}

function getJokeUsingFetch() {
  fetch(apiURL)
    .then(data => (data.ok ? data.json() : Promise.reject(data)))
    .then(data => writeToDOM(fetchViewer, data.value.joke))
    .catch(err => writeToDOM(fetchViewer, err));
}

getJokeUsingjQuery()
getJokeUsingFetch()