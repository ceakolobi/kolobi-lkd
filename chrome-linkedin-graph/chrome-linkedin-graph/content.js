function getText(selector) {
  const el = document.querySelector(selector);
  return el ? el.innerText.trim() : "";
}

function capturarPerfil() {
  const nome =
    getText("h1") ||
    getText(".pv-text-details__left-panel h1") ||
    "Desconhecido";

  const cargo =
    getText(".text-body-medium") ||
    getText(".pv-text-details__left-panel .text-body-medium") ||
    "Sem cargo";

  const empresa =
    getText("a[href*='company'] span") ||
    getText(".pv-text-details__right-panel-item-text") ||
    "Empresa não encontrada";

  return { nome, cargo, empresa };
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "CAPTURAR_PERFIL") {
    sendResponse(capturarPerfil());
  }
});
