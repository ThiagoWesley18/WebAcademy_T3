import { PrismaClient } from "@prisma/client";
import { ListaCarrinho } from "./compra.types";

const prisma = new PrismaClient();

export const getProdutosCarrinho = async (id: string): Promise<ListaCarrinho | null> =>{
    return await prisma.produto_no_carrinho.findUnique({
        select: {
            usuarioId: true,
            produtoId: true,
            quantidade: true,
            comprado: true,
        },
        where: {id},
      });
}
