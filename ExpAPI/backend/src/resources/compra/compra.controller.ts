import { Request, Response } from "express";
import { compra } from "./compra.service";

const index = async (req: Request, res: Response) => {
    if (req.session.carrinhoProdutos) {
        res.status(200).json(req.session.carrinhoProdutos);
    }else{
        return res.status(404).json("Carrinho vazio")
    }  
}

const adicionarProduto = async (req: Request, res: Response) => {
    const id = req.params.id;
    const quantidade = parseInt(req.params.total);
  
    if (!req.session.carrinhoProdutos){
        req.session.carrinhoProdutos = [];
    }
    req.session.carrinhoProdutos.push({id, quantidade});
  
    res.status(200).json({ msg: "Produto adicionado ao carrinho" });
}

const compraProduto = async (req: Request, res: Response) => {
    const produtos = req.session.carrinhoProdutos;
    if (req.session.uid) {
        const uid: string = req.session.uid;
        if (produtos){
            produtos.forEach(async (produto) => {
                await compra(uid, produto.id, produto.quantidade);
            });
            req.session.carrinhoProdutos = [];
            return res.status(200).json({ msg: "Compra realizada com sucesso" });
        }else{
            return res.status(404).json("Carrinho vazio")
        }    
    }
}


export default { index, adicionarProduto, compraProduto};