/*
  Warnings:

  - You are about to drop the column `organisationId` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `Organisation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Organisation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_organisationId_fkey";

-- AlterTable
ALTER TABLE "Organisation" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "organisationId",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "browserIpSignup" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "zipPostalCode" TEXT;

-- CreateTable
CREATE TABLE "UsersOrganisationsRealtion" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "organisationId" INTEGER NOT NULL,

    CONSTRAINT "UsersOrganisationsRealtion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOrganisationsRealtion" ADD CONSTRAINT "UsersOrganisationsRealtion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOrganisationsRealtion" ADD CONSTRAINT "UsersOrganisationsRealtion_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
