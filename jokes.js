const btnjQueryAJAX = document.getElementById("btnjQueryAJAX")
const btnFetchAJAX = document.getElementById("btnFetchAJAX")
const jQueryViewer = document.getElementById("jQueryViewer")
const fetchViewer = document.getElementById("fetchViewer")
const apiURL = "http://api.icndb.com/jokes/random"

btnjQueryAJAX.onclick = getJokeUsingjQuery
btnFetchAJAX.onclick = getJokeUsingFetch

const jQueryWrite = joke => jQueryViewer.textContent = joke.replaceAll("&quot;", '"')
const fetchWrite = joke => fetchViewer.textContent = joke.replaceAll("&quot;", '"')

//This api doesn't seem to return any errors
function getJokeUsingjQuery() {
  /*
  $.ajax({
    url: apiURL,
    type: "get",
    dataType: "json",
    success: data => jQueryWrite(data.value.joke)
  });
  */
  $.get(apiURL, data => jQueryWrite(data.value.joke))
}

function getJokeUsingFetch() {
  fetch(apiURL)
    .then(data => (data.ok ? data.json() : Promise.reject(data)))
    .then(data => fetchWrite(data.value.joke))
    .catch(err => console.log("Se produjo un error: ", err))
}

getJokeUsingjQuery()
getJokeUsingFetch()