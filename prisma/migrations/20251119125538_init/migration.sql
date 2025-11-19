-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "shortURl" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "project_shortURl_key" ON "project"("shortURl");
