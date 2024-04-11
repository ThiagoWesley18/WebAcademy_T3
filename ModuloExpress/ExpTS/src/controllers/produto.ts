/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from 'express';
import {Produto} from '../types/produtos';
import { createProdutoDto, updateProdutoDto } from '../types/produtos';

const index = async (req: Request, res: Response) => {
    try {
    const response = await fetch(`${process.env.URL_DB}/produtos`);
    const produtos: Produto[] = await response.json();
    res.render('produto/index', { produtos, layout: "main" });
} catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao buscar os produtos');
}
};

const read = async (req: Request, res: Response) => {
    const response = await fetch(`${process.env.URL_DB}/produtos/${req.params.id}`);
};

const create = async (req: Request, res: Response) => {
    if(req.method === "GET"){
        res.render('produto/create', { layout: "main" });
    }else if(req.method === "POST"){
        const produto = req.body as createProdutoDto;
        try {
                await fetch(`${process.env.URL_DB}/produtos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
            res.redirect('/produto');
        } catch (error) {
            console.error(error);
            res.status(500).send('Ocorreu um erro ao criar o produto');
        }
    }
};
const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};


export default { index, read, create, update, remove }

