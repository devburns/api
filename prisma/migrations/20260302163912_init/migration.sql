-- CreateTable
CREATE TABLE `categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `userAt` VARCHAR(100) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `categoria_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `g6pd` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(300) NOT NULL,
    `composicao` VARCHAR(300) NOT NULL,
    `categoriaId` INTEGER NOT NULL,
    `classe` VARCHAR(150) NOT NULL,
    `causa` VARCHAR(2000) NOT NULL,
    `utilizacao` VARCHAR(2000) NOT NULL,
    `risco` ENUM('ALTO', 'MODERADO', 'BAIXO') NOT NULL DEFAULT 'ALTO',
    `confirma` VARCHAR(1) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `userAt` VARCHAR(100) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `g6pd_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `g6pd` ADD CONSTRAINT `g6pd_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
