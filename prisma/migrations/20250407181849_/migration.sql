/*
  Warnings:

  - You are about to drop the column `ani` on the `Veiculo` table. All the data in the column will be lost.
  - Added the required column `ano` to the `Veiculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cor` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Veiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "placa" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "ano" INTEGER NOT NULL
);
INSERT INTO "new_Veiculo" ("id", "modelo", "placa") SELECT "id", "modelo", "placa" FROM "Veiculo";
DROP TABLE "Veiculo";
ALTER TABLE "new_Veiculo" RENAME TO "Veiculo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
