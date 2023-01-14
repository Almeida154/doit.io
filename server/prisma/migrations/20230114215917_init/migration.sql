-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "totalXp" INTEGER NOT NULL,
    "currentXp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "completedChallenges" INTEGER NOT NULL,
    "isDarkModeUI" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
