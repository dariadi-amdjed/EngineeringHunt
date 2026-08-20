export type CategorySlug =
  | 'electronics-circuitry'
  | 'electrical-power'
  | 'embedded-systems-iot'
  | 'pcb-design-eda'
  | 'digital-logic-hdl'
  | 'computer-architecture-chips'
  | 'robotics-control'
  | 'calculators-reference';

export type Purpose =
  | 'simulator'
  | 'eda-tool'
  | 'calculator'
  | 'datasheet-reference'
  | 'community-docs';

export type Pricing = 'free' | 'open-source' | 'freemium' | 'paid';

export type Authentication = 'no-account' | 'optional-signup' | 'signup-required';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Interactivity = 'interactive-canvas' | 'input-output-tool' | 'static-document';

export type Platform = 'web' | 'desktop' | 'mobile' | 'cli';

export type Website = {
  id: string;
  slug: string;
  name: string;
  url: string;
  imageUrl?: string;
  description: string;
  longDescription: string;
  category: CategorySlug;
  purposes: Purpose[];
  pricing: Pricing;
  authentication: Authentication;
  platform: Platform[];
  difficulty: Difficulty[];
  interactivity: Interactivity;
  openSource: boolean;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
};

export function isToolOpenSource(tool: Website): boolean {
  return tool.openSource === true || Boolean(tool.githubUrl);
}

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  topics: string[];
};

export type SearchFilters = {
  query: string;
  categories: CategorySlug[];
  purposes: Purpose[];
  pricing: Pricing[];
  authentication: Authentication[];
  difficulty: Difficulty[];
  interactivity: Interactivity[];
  openSource: boolean;
};

export type SortOption = 'relevance' | 'popular' | 'recent' | 'free-first' | 'open-source-first';

export type AISearchStep = {
  label: string;
  tags: string[];
};

export type AISearchResult = {
  query: string;
  interpretedTags: AISearchStep[];
  bestMatch: Website;
  matchReason: string;
  otherResults: Website[];
};
