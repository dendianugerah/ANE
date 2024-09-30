-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "compatibility" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
