/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `carrinhos_produtos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `carrinhos_produtos` ALTER COLUMN `produtoId` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `carrinhos_produtos_usuarioId_key` ON `carrinhos_produtos`(`usuarioId`);
