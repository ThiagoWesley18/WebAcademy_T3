import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const compra = async (usuarioId: string, produtoId: string, quantidade: number) =>{
    await prisma.compra.create({
        data: {
            usuarioId: usuarioId,
            produtoId: produtoId,
            quantidade: quantidade,
        },
    });
}
