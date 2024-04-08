"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTec = void 0;
function listTec(tecs) {
    const list = tecs
        .filter((p) => p.poweredByNodejs)
        .map((p) => `<li>${p.nome}-${p.type}</li>`);
    return `<ul>${list.join('')}</ul>`;
}
exports.listTec = listTec;
