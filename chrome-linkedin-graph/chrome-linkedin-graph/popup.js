import { montarGrafo } from "./graph.js";

document.getElementById("btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "CAPTURAR_PERFIL" }, (dados) => {
      const grafo = montarGrafo(dados);

      const nodes = new vis.DataSet(
        grafo.nodes.map((n) => ({ id: n.id, label: n.label }))
      );

      const edges = new vis.DataSet(
        grafo.edges.map((e) => ({ from: e.from, to: e.to, label: e.label }))
      );

      const container = document.getElementById("network");
      const network = new vis.Network(container, { nodes, edges }, {});
    });
  });
});
