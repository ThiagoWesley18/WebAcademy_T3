/*
  Warnings:

  - You are about to alter the column `preco` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(4,2)`.

*/
-- AlterTable
ALTER TABLE `produtos` MODIFY `preco` DECIMAL(4, 2) NOT NULL;
