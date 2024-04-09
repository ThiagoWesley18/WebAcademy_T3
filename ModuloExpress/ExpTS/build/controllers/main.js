"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lorem = exports.hb4 = exports.hb3 = exports.hb2 = exports.hb1 = exports.hello = void 0;
const loremText_1 = require("./../utils/loremText");
const hello = (req, res) => {
    res.send("Hello World");
};
exports.hello = hello;
const hb1 = (req, res) => {
    res.render("hb1", {
        mensagem: "Universidade Federal do Amazonas",
        layout: "mainSCSS",
    });
};
exports.hb1 = hb1;
const hb2 = (req, res) => {
    res.render("hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
        layout: "main",
    });
};
exports.hb2 = hb2;
const hb3 = (req, res) => {
    const profes = [
        { nome: "David Fernandes", sala: 1238 },
        { nome: "Horácio Fernandes", sala: 1233 },
        { nome: "Edleno Moura", sala: 1236 },
        { nome: "Elaine Harada", sala: 1231 },
    ];
    res.render("hb3", { profes, layout: "main" });
};
exports.hb3 = hb3;
const hb4 = (req, res) => {
    const tecnologias = [
        { nome: "Express", type: "Framework", poweredByNodejs: true },
        { nome: "Laravel", type: "Framework", poweredByNodejs: false },
        { nome: "React", type: "Library", poweredByNodejs: true },
        { nome: "Handlebars", type: "Engine View", poweredByNodejs: true },
        { nome: "Django", type: "Framework", poweredByNodejs: false },
        { nome: "Docker", type: "Virtualization", poweredByNodejs: false },
        { nome: "Sequelize", type: "ORM tool", poweredByNodejs: true },
    ];
    res.render("hb4", { tecnologias, layout: "main" });
};
exports.hb4 = hb4;
const lorem = (req, res) => {
    const { paragrafos } = req.params;
    const numParagrafos = Number(paragrafos);
    res.send((0, loremText_1.gerarTextoLoremIpisum)(numParagrafos));
};
exports.lorem = lorem;
