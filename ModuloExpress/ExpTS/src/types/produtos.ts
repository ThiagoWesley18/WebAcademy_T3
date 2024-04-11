
export interface Produto {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
}

export type createProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
export type updateProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;