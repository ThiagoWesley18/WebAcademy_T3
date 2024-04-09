import { Tecnologias } from "./helpersTypes";

export function listTec(tecs: Tecnologias[]) {
  const list = tecs
    .filter((p) => p.poweredByNodejs)
    .map((p) => `<li>${p.nome} - ${p.type}</li>`);

  return `<ul>${list.join("")}</ul>`;
}
