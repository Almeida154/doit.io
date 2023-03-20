/*
  Warnings:

  - Added the required column `avatar_url` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "totalXp" INTEGER NOT NULL,
    "currentXp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "completedChallenges" INTEGER NOT NULL,
    "isDarkMode" BOOLEAN NOT NULL,
    "avatar_url" TEXT NOT NULL
);
INSERT INTO "new_User" ("completedChallenges", "currentXp", "id", "isDarkMode", "level", "totalXp", "username") SELECT "completedChallenges", "currentXp", "id", "isDarkMode", "level", "totalXp", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
