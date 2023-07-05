function createCTAElements(acceptButtonText, rejectButtonText) {
  const divUpsell = document.getElementById("upsell-cta-buttons");

  const divContainer = document.createElement("div");
  divContainer.style.display = "flex";
  divContainer.style.flexDirection = "column";
  divContainer.style.alignItems = "center";
  divContainer.style.rowGap = "38px";

  const acceptButton = document.createElement("button");
  acceptButton.id = "upsell-accept-button";
  acceptButton.style.padding = "38px";
  acceptButton.style.backgroundColor = "#348535";
  acceptButton.style.borderRadius = "7px";
  acceptButton.style.color = "#fff";
  acceptButton.style.fontSize = "26px";
  acceptButton.style.lineHeight = "150%";
  acceptButton.style.fontWeight = "700";
  acceptButton.style.cursor = "pointer";
  acceptButton.innerHTML = acceptButtonText;

  const rejectButton = document.createElement("button");
  rejectButton.id = "upsell-reject-button";
  rejectButton.style.color = "#3f3f3f";
  rejectButton.style.fontSize = "26px";
  rejectButton.style.lineHeight = "150%";
  rejectButton.style.cursor = "pointer";
  rejectButton.style.textDecoration = "underline";
  rejectButton.innerHTML = rejectButtonText;

  acceptButton.onclick = function () {
    parent.postMessage("upsell-accept", "http://localhost:3030")
  };

  rejectButton.onclick = function () {
    parent.postMessage("upsell-reject", "http://localhost:3030")
  };

  divContainer.appendChild(acceptButton);
  divContainer.appendChild(rejectButton);

  divUpsell.appendChild(divContainer);
}

window.onload = function() {
  const scriptElement = document.getElementById('upsell-cta-script');;

  const acceptButtonText = scriptElement.getAttribute("data-text-accept");
  const rejectButtonText = scriptElement.getAttribute("data-text-reject");

  createCTAElements(acceptButtonText, rejectButtonText);
};
