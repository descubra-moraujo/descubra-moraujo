-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "pontoTuristicoId" INTEGER,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restaurante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "pontoTuristicoId" INTEGER,

    CONSTRAINT "Restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospedagem" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "pontoTuristicoId" INTEGER,

    CONSTRAINT "Hospedagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PontoTuristico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,

    CONSTRAINT "PontoTuristico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_codigo_key" ON "Admin"("codigo");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_pontoTuristicoId_fkey" FOREIGN KEY ("pontoTuristicoId") REFERENCES "PontoTuristico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurante" ADD CONSTRAINT "Restaurante_pontoTuristicoId_fkey" FOREIGN KEY ("pontoTuristicoId") REFERENCES "PontoTuristico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospedagem" ADD CONSTRAINT "Hospedagem_pontoTuristicoId_fkey" FOREIGN KEY ("pontoTuristicoId") REFERENCES "PontoTuristico"("id") ON DELETE SET NULL ON UPDATE CASCADE;
