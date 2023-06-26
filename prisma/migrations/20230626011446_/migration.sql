-- AlterTable
ALTER TABLE `app` ADD COLUMN `is_free` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `secret` VARCHAR(191) NULL;
