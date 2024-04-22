import { PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export async function cadastro() {  
  const createMany = await prisma.clientes.createMany({
    data: [
      { nome: 'Bob', email: 'bob@prisma.io', celular: '123456789', dataNascimento: '1990-01-01', cpf: '12345678901'},
      { nome: 'Bobo', email: 'bobo@prisma.io', celular: '92985887844', dataNascimento: '1996-18-08', cpf: '12345678989' }, 
      { nome: 'Yewande', email: 'yewande@prisma.io', celular: '92985887844', dataNascimento: '1996-18-08', cpf: '12345678989'},
      { nome: 'Angelique', email: 'angelique@prisma.io', celular: '92985887844', dataNascimento: '1996-18-08', cpf: '12345678989'},
    ],
    skipDuplicates: true
  })

}

export async function atualiza(email: string, nome: string = "", celular: string = "", dataNascimento: string = "", cpf: string = "") {
  const updateUser = await prisma.clientes.update({
    where: {
      email: email
    },
    data: {
      nome: nome,
      celular: celular,
      dataNascimento: dataNascimento,
      cpf: cpf
    },
  })
} 

export async function deleta(email: string) {
  const deleteEndereço = prisma.enderecos.deleteMany({
    where: {
      clienteId : email,
    },
  })

  const deletePedido = prisma.lista_Produtos.deleteMany({
    where: {
      id_cliente: email,
    },
  })

  const deleteUser = await prisma.clientes.delete({
    where: {
      email: email
    }
  })
}

