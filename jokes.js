const btnjQueryAJAX = document.getElementById("btnjQueryAJAX");
const btnFetchAJAX = document.getElementById("btnFetchAJAX");

btnjQueryAJAX.onclick = jQueryAJAXHandler;
btnFetchAJAX.onclick = fetchAJAXHandler;

function jQueryAJAXHandler() {
  const joke = getJokeUsingjQuery();

}

function fetchAJAXHandler() {
  const joke = getJokeUsingFetch();
}

function getJokeUsingjQuery() {

}

function getJokeUsingFetch() {

}

