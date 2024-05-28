/*
  Warnings:

  - You are about to drop the `carrinhos_produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `carrinhos_produtos` DROP FOREIGN KEY `carrinhos_produtos_produtoId_fkey`;

-- DropForeignKey
ALTER TABLE `carrinhos_produtos` DROP FOREIGN KEY `carrinhos_produtos_usuarioId_fkey`;

-- DropTable
DROP TABLE `carrinhos_produtos`;

-- CreateTable
CREATE TABLE `compras_produtos` (
    `id` CHAR(40) NOT NULL,
    `usuarioId` CHAR(40) NOT NULL,
    `produtoId` CHAR(40) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `autorizado` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `compras_produtos` ADD CONSTRAINT `compras_produtos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compras_produtos` ADD CONSTRAINT `compras_produtos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
