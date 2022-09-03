/*
  Warnings:

  - You are about to drop the `ShotsTakenByUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShotsTakenByUser" DROP CONSTRAINT "ShotsTakenByUser_shotId_fkey";

-- DropForeignKey
ALTER TABLE "ShotsTakenByUser" DROP CONSTRAINT "ShotsTakenByUser_userId_fkey";

-- DropTable
DROP TABLE "ShotsTakenByUser";

-- CreateTable
CREATE TABLE "_ShotToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ShotToUser_AB_unique" ON "_ShotToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ShotToUser_B_index" ON "_ShotToUser"("B");

-- AddForeignKey
ALTER TABLE "_ShotToUser" ADD CONSTRAINT "_ShotToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Shot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShotToUser" ADD CONSTRAINT "_ShotToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
