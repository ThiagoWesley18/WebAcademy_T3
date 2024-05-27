import { Produto_no_carrinho} from "@prisma/client";

export type ListaCarrinho = Pick<Produto_no_carrinho,"usuarioId" | "produtoId" | "quantidade" | "comprado">;