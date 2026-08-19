export type Website = {
  id: string;
  slug: string;
  name: string;
  url: string;
  description: string;
  longDescription: string;
  categories: CategorySlug[];
  topics: string[];
  contentTypes: ContentType[];
  difficulty: Difficulty[];
  tags: string[];
  featured: boolean;
  githubUrl?: string;
};

export type CategorySlug = 'embedded-systems' | 'electronics' | 'robotics';

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  topics: string[];
};

export type ContentType = 'projects' | 'tutorials' | 'documentation' | 'tools' | 'learning';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Platform = 'web' | 'desktop' | 'mobile';

export type SearchFilters = {
  query: string;
  categories: CategorySlug[];
  contentTypes: ContentType[];
  difficulty: Difficulty[];
  platforms: Platform[];
};
