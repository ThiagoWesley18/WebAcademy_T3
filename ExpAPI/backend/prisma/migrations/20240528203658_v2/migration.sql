/*
  Warnings:

  - The primary key for the `compras_produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `autorizado` on the `compras_produtos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `compras_produtos` DROP PRIMARY KEY,
    DROP COLUMN `autorizado`,
    ADD PRIMARY KEY (`usuarioId`, `id`);
