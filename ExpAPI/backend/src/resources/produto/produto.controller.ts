import {Request, Response} from 'express';
import { createProduto, jaExiste, listprodutos, readProduto, updateProduto, deleteProduto} from './produto.service';
import { UpdateProdutoDto } from './produto.types';


const index = async (req: Request, res: Response) => {
    /*
        #swagger.summary = 'Listagem de produtos.'
        #swagger.responses[200] = {
            schema: { $ref: '#/definitions/ProdutosArray' }
        }    
    */
    try {
        const produtos = await listprodutos();
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json(err);
    }       
};
const create = async (req: Request, res: Response) => {
    /*
        #swagger.summary = 'Adiciona um novo produto na base.'
        #swagger.parameters['body'] = {
            in: 'body',
            schema: { $ref: '#/definitions/CreateProdutoDto' }
        } 
        #swagger.responses[200] = {
            schema: { $ref: '#/definitions/Produto' }
        }   
    */
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
    /*
        #swagger.summary = 'Recupera dados de um produto específico.'
        #swagger.parameters['id'] = { description: 'ID do produto desejado' }
        #swagger.responses[200] = {
            schema: { $ref: '#/definitions/Produto' }
        }   
    */
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
    /*
        #swagger.summary = 'Altera os dados de um produto específico.'
        #swagger.parameters['id'] = { description: 'ID do produto' }
        #swagger.parameters['body'] = {
            in: 'body',
            schema: { $ref: '#/definitions/UpdateProdutoDto' }
        }   
        #swagger.responses[200] = {
            schema: { $ref: '#/definitions/Produto' }
        }   
    */
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
    /*
        #swagger.summary = 'Apaga um produto da base.'
        #swagger.parameters['id'] = { description: 'ID do produto' }  
    */
    const {id} = req.params;
    try {
        const produto = await deleteProduto(id);
        res.status(200).json(produto);
    } catch (err) {
        res.status(500).json(err);
    }
};

export default {index, create, read, update, remove};