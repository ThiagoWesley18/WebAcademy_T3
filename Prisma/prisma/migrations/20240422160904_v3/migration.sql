/*
  Warnings:

  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `enderecos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lista_Produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `numero_serie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tem_produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `enderecos` DROP FOREIGN KEY `enderecos_clienteId_fkey`;

-- DropForeignKey
ALTER TABLE `lista_Produtos` DROP FOREIGN KEY `lista_Produtos_id_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `numero_serie` DROP FOREIGN KEY `numero_serie_id_produto_fkey`;

-- DropForeignKey
ALTER TABLE `tem_produtos` DROP FOREIGN KEY `tem_produtos_id_lista_fkey`;

-- DropForeignKey
ALTER TABLE `tem_produtos` DROP FOREIGN KEY `tem_produtos_id_produto_fkey`;

-- DropTable
DROP TABLE `clientes`;

-- DropTable
DROP TABLE `enderecos`;

-- DropTable
DROP TABLE `lista_Produtos`;

-- DropTable
DROP TABLE `numero_serie`;

-- DropTable
DROP TABLE `produtos`;

-- DropTable
DROP TABLE `tem_produtos`;

-- CreateTable
CREATE TABLE `Clientes` (
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `dataNascimento` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clientes_email_key`(`email`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecos` (
    `clienteId` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`clienteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lista_Produtos` (
    `id_cliente` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `valor_pagamento` DOUBLE NOT NULL,
    `forma_pagamento` VARCHAR(191) NOT NULL,
    `desconto` DOUBLE NOT NULL,

    UNIQUE INDEX `Lista_Produtos_id_cliente_key`(`id_cliente`),
    PRIMARY KEY (`id_cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tem_produtos` (
    `id_lista` VARCHAR(191) NOT NULL,
    `id_produto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id_lista`, `id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(191) NOT NULL,
    `estoque` INTEGER NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `subcategoria` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Produtos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Numero_serie` (
    `id_produto` INTEGER NOT NULL,
    `numero_serie` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Clientes`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lista_Produtos` ADD CONSTRAINT `Lista_Produtos_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Clientes`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tem_produtos` ADD CONSTRAINT `Tem_produtos_id_lista_fkey` FOREIGN KEY (`id_lista`) REFERENCES `Lista_Produtos`(`id_cliente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tem_produtos` ADD CONSTRAINT `Tem_produtos_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Numero_serie` ADD CONSTRAINT `Numero_serie_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
