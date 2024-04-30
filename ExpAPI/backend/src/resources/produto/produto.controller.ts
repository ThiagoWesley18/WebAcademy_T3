import {Request, Response} from 'express';
import { createProduto, jaExiste, listprodutos, readProduto, updateProduto, deleteProduto} from './produto.service';
import { UpdateProdutoDto } from './produto.types';


const index = async (req: Request, res: Response) => {
    try {
        const produtos = await listprodutos();
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json(err);
    }       
};
const create = async (req: Request, res: Response) => {
    const produto = req.body;
    try {
        if (await jaExiste(produto.nome)) {
            const newProduto = await createProduto(produto);
            res.status(200).json(newProduto);
            
        }else{
            res.status(400).json({ msg: 'Produto já existe' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
const read = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const produto = await readProduto(id);
        if (!produto) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }
        res.status(200).json(produto);
    } catch (err) {
        res.status(500).json(err);
    }
};
const update = async (req: Request, res: Response) => {
    const {id} = req.params;
    const produto = req.body as UpdateProdutoDto;
    try {
        if (await jaExiste(produto.nome, id)) {
            const updatedProduto = await updateProduto(id, produto);
            res.status(204).json(updatedProduto);
        }else{
            res.status(400).json({ msg: 'Produto já existe' });
        
        } 
    } catch (err) {
        res.status(500).json(err);
    }
};
const remove = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const produto = await deleteProduto(id);
        res.status(200).json(produto);
    } catch (err) {
        res.status(500).json(err);
    }
};

export default {index, create, read, update, remove};