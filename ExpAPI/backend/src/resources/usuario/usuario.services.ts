import {genSalt} from 'bcryptjs';
import { hash } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { CreateUsuarioDto, UsuarioDto, TiposUsuario } from "./usuario.types";

const prisma = new PrismaClient();

export const createUsuario = async (usuario: CreateUsuarioDto): Promise<UsuarioDto> => {
  const rounds = parseInt(process.env.BCRYPT_SALT_ROUNDS!);
  const salt = await genSalt(rounds);
  const senha = await hash(usuario.senha, salt);
  return await prisma.usuario.create({data: {
    ...usuario,
    senha,
    tipoUsuarioId:
       tipoUsuario === "admin" ? TiposUsuario.ADMIN : TiposUsuario.CLIENT
    }});
}