-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "subheadline" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "imageUrl" TEXT,
    "socialLinks" JSONB,
    "techStack" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
