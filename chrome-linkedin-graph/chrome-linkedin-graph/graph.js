export function montarGrafo(dados) {
  return {
    nodes: [
      { id: dados.nome, label: dados.nome, type: "pessoa" },
      { id: dados.empresa, label: dados.empresa, type: "empresa" }
    ],
    edges: [
      { from: dados.nome, to: dados.empresa, label: "TRABALHA_EM" }
    ]
  };
}
