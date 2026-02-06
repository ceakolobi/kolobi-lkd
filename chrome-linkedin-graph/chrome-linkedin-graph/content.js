function capturarPerfil() {
  const nome = document.querySelector("h1")?.innerText || "Desconhecido";
  const cargo = document.querySelector(".text-body-medium")?.innerText || "Sem cargo";
  const empresa =
    document.querySelector("a[href*='company'] span")?.innerText ||
    "Empresa não encontrada";

  return { nome, cargo, empresa };
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "CAPTURAR_PERFIL") {
    sendResponse(capturarPerfil());
  }
});
