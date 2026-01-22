-- CreateTable
CREATE TABLE "SiteSettings" (
    "id" TEXT NOT NULL,
    "siteName" TEXT NOT NULL DEFAULT 'Nexus Web',
    "description" TEXT NOT NULL DEFAULT 'A modern modular website.',
    "logoUrl" TEXT,
    "faviconUrl" TEXT,
    "socials" JSONB,
    "theme" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("id")
);
