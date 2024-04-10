/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from 'express';
import {Produto} from '../types/produtos';

const index = async (req: Request, res: Response) => {
    const response = await fetch(`${process.env.URL_DB}/produtos`);
    const produtos: Produto[] = await response.json();
    res.render('produto/index', { produtos, layout: "main" });
};

const read = async (req: Request, res: Response) => {
    const response = await fetch(`${process.env.URL_DB}/produtos/${req.params.id}`);
};

const create = async (req: Request, res: Response) => {
    const response = await fetch(`${process.env.URL_DB}/produtos`, {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
    });
};
const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};


export default { index, read, create, update, remove }