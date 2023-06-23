document.querySelector('#upsell-accept-button').onclick = function () {
  parent.postMessage("upsell-accept", "http://localhost:3030")
};

document.querySelector('#upsell-reject-button').onclick = function () {
  parent.postMessage("upsell-reject", "http://localhost:3030")
};