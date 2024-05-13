import { Request, Response } from 'express';
import {CreateUsuario} from '../usuario/usuario.services';

const signup = async (req: Request, res: Response) => {
    const usuario = req.body;
    try {
        const novoUsuario = await CreateUsuario(usuario, "Client");
        res.status(201).json(novoUsuario);
    }
};
const signin = async (req: Request, res: Response) => {};
const logout = async (req: Request, res: Response) => {};

export default { signup, signin, logout };