export interface Technology {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    slug: string;
    websiteUrl: string;
    githubUrl: string;
    documentationUrl: string;
    categories?: { id: string; name: string }[];
    updatedAt: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    slug: string;
}

export interface LogoConfig {
    image: string | null;
    dark?: string | null;
    alt: string;
}

export interface LogoRegistry {
    [slug: string]: LogoConfig;
}
