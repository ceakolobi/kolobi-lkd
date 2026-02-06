import { montarGrafo } from "./graph.js";

document.getElementById("btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "CAPTURAR_PERFIL" },
      (dados) => {
        const grafo = montarGrafo(dados);
        document.getElementById("grafo").textContent = JSON.stringify(grafo, null, 2);
      }
    );
  });
});
