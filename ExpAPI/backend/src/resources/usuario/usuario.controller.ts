import {Request, Response} from 'express';
import {createUsuario} from './usuario.services';

const index = async (req: Request, res: Response) => {};
const create = async (req: Request, res: Response) => {
    const usuario = req.body;
    const tipoUsuario = req.body.tipoUsuario;
    try{
        const novoUsuario = await createUsuario(usuario, tipoUsuario);
    }
};
const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, update, remove, read};
