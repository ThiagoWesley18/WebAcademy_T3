-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `carrinhoId` CHAR(36) NULL;

-- CreateTable
CREATE TABLE `carrinhos_produtos` (
    `id` CHAR(36) NOT NULL,
    `usuarioId` CHAR(36) NOT NULL,
    `produtoId` CHAR(36) NOT NULL DEFAULT '',
    `quantidade` INTEGER NOT NULL DEFAULT 0,
    `comprado` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `carrinhos_produtos` ADD CONSTRAINT `carrinhos_produtos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carrinhos_produtos` ADD CONSTRAINT `carrinhos_produtos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
