import type { CategorySlug, Focus } from '@/types';

// ── Focus taxonomy ─────────────────────────────────────────────────────
// Central, single source of truth for the "Focus" filter vocabulary.
// Each domain has its own controlled set of focus concepts. Focus values
// are curated filter concepts and stay separate from free-form tool tags.

export interface FocusOption {
  value: Focus;
  label: string;
}

export const FOCUS_BY_CATEGORY: Record<CategorySlug, FocusOption[]> = {
  'embedded-computer-engineering': [
    { value: 'microcontrollers', label: 'Microcontrollers' },
    { value: 'firmware', label: 'Firmware' },
    { value: 'rtos', label: 'RTOS' },
    { value: 'ide-toolchain', label: 'IDE / Toolchains' },
    { value: 'digital-logic', label: 'Digital Logic' },
    { value: 'hdl', label: 'HDL' },
    { value: 'fpga', label: 'FPGA' },
    { value: 'computer-architecture', label: 'Computer Architecture' },
    { value: 'cpu-design', label: 'CPU / Processor Design' },
    { value: 'asic-chip-design', label: 'ASIC / Chip Design' },
    { value: 'embedded-simulation', label: 'Embedded Simulation' },
    { value: 'low-level-programming', label: 'Low-Level Programming' },
  ],
  'robotics-control': [
    { value: 'robot-simulation', label: 'Robot Simulation' },
    { value: 'ros', label: 'ROS / ROS 2' },
    { value: 'control-systems', label: 'Control Systems' },
    { value: 'motion-planning', label: 'Motion Planning' },
    { value: 'sensors', label: 'Sensors' },
    { value: 'actuators', label: 'Actuators' },
    { value: 'kinematics', label: 'Kinematics' },
    { value: 'dynamics', label: 'Dynamics' },
    { value: 'numerical-computing', label: 'Numerical Computing' },
  ],
  'electronics-hardware-design': [
    { value: 'circuit-simulation', label: 'Circuit Simulation' },
    { value: 'spice', label: 'SPICE' },
    { value: 'pcb-eda', label: 'PCB / EDA' },
    { value: 'schematic-design', label: 'Schematic Design' },
    { value: 'components', label: 'Components' },
    { value: 'power-electronics', label: 'Power Electronics' },
    { value: 'signal-analysis', label: 'Signal Analysis' },
    { value: 'hardware-prototyping', label: 'Hardware Prototyping' },
  ],
  'ai-machine-learning': [
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'deep-learning', label: 'Deep Learning' },
    { value: 'computer-vision', label: 'Computer Vision' },
    { value: 'nlp', label: 'NLP' },
    { value: 'models', label: 'Models' },
    { value: 'datasets', label: 'Datasets' },
    { value: 'experiment-tracking', label: 'Experiment Tracking' },
    { value: 'mlops', label: 'MLOps' },
    { value: 'inference-deployment', label: 'Inference / Deployment' },
    { value: 'edge-ai', label: 'Edge AI' },
    { value: 'gpu-acceleration', label: 'GPU / Acceleration' },
    { value: 'ml-compiler', label: 'ML Compiler' },
    { value: 'notebooks', label: 'Notebooks' },
    { value: 'data-science', label: 'Data Science' },
  ],
  'engineering-resources-tools': [
    { value: 'calculators', label: 'Calculators' },
    { value: 'datasheets', label: 'Datasheets' },
    { value: 'component-search', label: 'Component Search' },
    { value: 'documentation', label: 'Documentation' },
    { value: 'learning', label: 'Learning' },
    { value: 'references', label: 'References' },
    { value: 'community', label: 'Community' },
    { value: 'engineering-tools', label: 'Engineering Tools' },
  ],
};

export const ALL_FOCUS_CATEGORIES = Object.keys(
  FOCUS_BY_CATEGORY
) as CategorySlug[];

const OPTION_INDEX = new Map<Focus, FocusOption>(
  ALL_FOCUS_CATEGORIES.flatMap((category) => FOCUS_BY_CATEGORY[category]).map(
    (option) => [option.value, option]
  )
);

/** Human-readable label for a focus value, falling back to the raw value. */
export function focusLabel(value: Focus): string {
  return OPTION_INDEX.get(value)?.label ?? value.replace(/-/g, ' ');
}

/**
 * Focus options available for the selected domains. When no domain is
 * selected, every domain's focus vocabulary is offered.
 */
export function getFocusOptions(categories?: CategorySlug[]): FocusOption[] {
  const cats = categories && categories.length > 0 ? categories : ALL_FOCUS_CATEGORIES;
  return cats.flatMap((category) => FOCUS_BY_CATEGORY[category] ?? []);
}

export function getFocusOptionsForCategory(category: CategorySlug): FocusOption[] {
  return [...(FOCUS_BY_CATEGORY[category] ?? [])];
}

export function isValidFocusForCategory(focus: Focus, category: CategorySlug): boolean {
  return (FOCUS_BY_CATEGORY[category] ?? []).some((f) => f.value === focus);
}

/** Drop focus selections that are not valid for any of the selected domains. */
export function pruneFocusSelection(
  categories: CategorySlug[],
  focus: Focus[]
): Focus[] {
  const valid = new Set<Focus>();
  for (const category of categories.length > 0 ? categories : ALL_FOCUS_CATEGORIES) {
    for (const option of FOCUS_BY_CATEGORY[category]) valid.add(option.value);
  }
  return focus.filter((f) => valid.has(f));
}