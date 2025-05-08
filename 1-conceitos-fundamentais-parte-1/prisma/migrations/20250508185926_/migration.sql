-- CreateTable
CREATE TABLE "messages" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "message" VARCHAR NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
