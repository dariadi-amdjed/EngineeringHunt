export type CategorySlug =
  | 'embedded-computer-engineering'
  | 'robotics-control'
  | 'electronics-hardware-design'
  | 'ai-machine-learning'
  | 'engineering-resources-tools';

export type Purpose =
  | 'simulator'
  | 'eda-tool'
  | 'ide-toolchain'
  | 'rtos'
  | 'calculator'
  | 'datasheet-reference'
  | 'community-docs'
  | 'ml-framework';

export type Focus =
  // Embedded Systems & Computer Engineering
  | 'microcontrollers'
  | 'firmware'
  | 'rtos'
  | 'ide-toolchain'
  | 'digital-logic'
  | 'hdl'
  | 'fpga'
  | 'computer-architecture'
  | 'cpu-design'
  | 'asic-chip-design'
  | 'embedded-simulation'
  | 'low-level-programming'
  // Robotics & Control Systems
  | 'robot-simulation'
  | 'ros'
  | 'control-systems'
  | 'motion-planning'
  | 'sensors'
  | 'actuators'
  | 'kinematics'
  | 'dynamics'
  | 'numerical-computing'
  // Electronics & Hardware Design
  | 'circuit-simulation'
  | 'spice'
  | 'pcb-eda'
  | 'schematic-design'
  | 'components'
  | 'power-electronics'
  | 'signal-analysis'
  | 'hardware-prototyping'
  // AI & Machine Learning
  | 'machine-learning'
  | 'deep-learning'
  | 'computer-vision'
  | 'nlp'
  | 'models'
  | 'datasets'
  | 'experiment-tracking'
  | 'mlops'
  | 'inference-deployment'
  | 'edge-ai'
  | 'gpu-acceleration'
  | 'ml-compiler'
  | 'notebooks'
  | 'data-science'
  // Engineering Resources & Tools
  | 'calculators'
  | 'datasheets'
  | 'component-search'
  | 'documentation'
  | 'learning'
  | 'references'
  | 'community'
  | 'engineering-tools';

export type Pricing = 'free' | 'open-source' | 'freemium' | 'paid';

export type Authentication = 'no-account' | 'optional-signup' | 'signup-required';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Interactivity = 'interactive-canvas' | 'input-output-tool' | 'static-document';

export type ToolType = 'web-app' | 'desktop-app' | 'extension';

export type Platform = 'web' | 'windows' | 'mac' | 'linux' | 'cli' | 'mobile';

export type Website = {
  id: string;
  slug: string;
  name: string;
  url: string;
  imageUrl?: string;
  description: string;
  longDescription: string;
  type: ToolType;
  category: CategorySlug;
  purposes: Purpose[];
  focus: Focus[];
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
  focus: Focus[];
  pricing: Pricing[];
  authentication: Authentication[];
  difficulty: Difficulty[];
  interactivity: Interactivity[];
  openSource: boolean;
  type: ToolType[];
  platform: Platform[];
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
  /** True when no result scored as a confident match; results are closest-effort only. */
  weakMatch?: boolean;
};
