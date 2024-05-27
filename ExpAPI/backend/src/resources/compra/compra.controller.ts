import { Request, Response } from "express";
import { getProdutosCarrinho } from "./compra.service";

const index = async (req: Request, res: Response) => {
    if (req.session && req.session.uid) {
        const usuario = req.session.uid;
        return await getProdutosCarrinho(usuario) ? res.status(200).json(getProdutosCarrinho(usuario)) : res.status(404).json("Carrinho vazio");
    }else{
        return res.status(404).json("Usuário não logado")
    }  
}

export default { index };