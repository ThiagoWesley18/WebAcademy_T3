/*
  Warnings:

  - You are about to alter the column `preco` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `produtos` MODIFY `preco` DECIMAL(10, 2) NOT NULL;
