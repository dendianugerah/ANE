-- CreateTable
CREATE TABLE "Calibration" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "merk" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "serialnum" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Calibration_pkey" PRIMARY KEY ("id")
);
