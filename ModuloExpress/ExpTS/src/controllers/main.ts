import { Request, Response } from "express";
import { gerarTextoLoremIpisum } from "./../utils/loremText";

export const hello = (req: Request, res: Response) => {
  res.send("Hello World");
};

export const hb1 = (req: Request, res: Response) => {
  res.render("hb1", {
    mensagem: "Universidade Federal do Amazonas",
    layout: "main",
  });
};

export const hb2 = (req: Request, res: Response) => {
  res.render("hb2", {
    poweredByNodejs: true,
    name: "Express",
    type: "Framework",
    layout: "main",
  });
};

export const hb3 = (req: Request, res: Response) => {
  const profes = [
    { nome: "David Fernandes", sala: 1238 },
    { nome: "Horácio Fernandes", sala: 1233 },
    { nome: "Edleno Moura", sala: 1236 },
    { nome: "Elaine Harada", sala: 1231 },
  ];
  res.render("hb3", { profes, layout: "main" });
};

export const hb4 = (req: Request, res: Response) => {
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

export const lorem = (req: Request, res: Response) => {
  const { paragrafos } = req.params;
  const numParagrafos = Number(paragrafos);
  res.send(gerarTextoLoremIpisum(numParagrafos));
};
