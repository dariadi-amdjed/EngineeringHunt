import type { AISearchResult, Website } from '@/types';
import { websites } from './websites';

type PredefinedQuery = {
  keywords: string[];
  tags: { label: string; type: 'category' | 'intent' | 'constraint' }[];
  bestMatchSlug: string;
  matchReason: string;
  otherSlugs: string[];
};

const predefinedQueries: PredefinedQuery[] = [
  {
    keywords: ['esp32', 'simulate', 'simulation', 'circuit'],
    tags: [
      { label: 'Simulation', type: 'intent' },
      { label: 'ESP32', type: 'constraint' },
      { label: 'Browser', type: 'constraint' },
      { label: 'Embedded Systems', type: 'category' },
    ],
    bestMatchSlug: 'wokwi',
    matchReason: 'Supports ESP32, sensors and browser-based circuit simulation.',
    otherSlugs: ['circuitlab', 'falstad', 'tinkercad', 'arduino'],
  },
  {
    keywords: ['pcb', 'design', 'layout', 'schematic'],
    tags: [
      { label: 'Design', type: 'intent' },
      { label: 'PCB', type: 'constraint' },
      { label: 'Schematic', type: 'constraint' },
      { label: 'PCB Design', type: 'category' },
    ],
    bestMatchSlug: 'kicad',
    matchReason: 'Industry-standard open-source EDA suite for professional PCB design.',
    otherSlugs: ['easyeda', 'opencircuit', 'altium', 'snapeda'],
  },
  {
    keywords: ['filter', 'transformer', 'calculator', 'electrical', 'power'],
    tags: [
      { label: 'Calculator', type: 'intent' },
      { label: 'Power', type: 'constraint' },
      { label: 'Filter Design', type: 'constraint' },
      { label: 'Electrical Engineering', type: 'category' },
    ],
    bestMatchSlug: 'okawa-electric',
    matchReason: 'Free calculators for active/passive filters, transformers and transmission lines.',
    otherSlugs: ['eep-web-tools', 'octopart', 'digikey'],
  },
  {
    keywords: ['robot', 'ros', 'navigation', 'autonomous'],
    tags: [
      { label: 'Development', type: 'intent' },
      { label: 'ROS', type: 'constraint' },
      { label: 'Robotics', type: 'constraint' },
      { label: 'Robotics', type: 'category' },
    ],
    bestMatchSlug: 'ros-org',
    matchReason: 'Official ROS documentation and ecosystem for robotics development.',
    otherSlugs: ['gazebo', 'webots', 'coppeliasim', 'matlab-simulink'],
  },
  {
    keywords: ['robot', 'simulat', 'physics', 'simulate'],
    tags: [
      { label: 'Simulation', type: 'intent' },
      { label: 'Robotics', type: 'constraint' },
      { label: 'Physics', type: 'constraint' },
      { label: 'Robotics', type: 'category' },
    ],
    bestMatchSlug: 'gazebo',
    matchReason: 'Industry-standard robot simulator with physics and ROS integration.',
    otherSlugs: ['webots', 'coppeliasim', 'wokwi'],
  },
  {
    keywords: ['circuit', 'learn', 'analog', 'digital', 'beginner', 'fundamentals'],
    tags: [
      { label: 'Learning', type: 'intent' },
      { label: 'Circuits', type: 'constraint' },
      { label: 'Beginner', type: 'constraint' },
      { label: 'Electronics', type: 'category' },
    ],
    bestMatchSlug: 'all-about-circuits',
    matchReason: 'Free textbook and worksheets covering electronics fundamentals.',
    otherSlugs: ['electronics-tutorials', 'falstad', 'tinkercad'],
  },
  {
    keywords: ['verilog', 'vhdl', 'hdl', 'fpga', 'synthesis'],
    tags: [
      { label: 'Simulation', type: 'intent' },
      { label: 'HDL', type: 'constraint' },
      { label: 'FPGA', type: 'constraint' },
      { label: 'Digital Logic', type: 'category' },
    ],
    bestMatchSlug: 'edaplayground',
    matchReason: 'Browser-based HDL simulation with multiple simulator backends.',
    otherSlugs: ['hdlbits', 'iverilog', 'yosys', 'tinytapeout'],
  },
  {
    keywords: ['tiny', 'tapeout', 'asic', 'chip', 'silicon'],
    tags: [
      { label: 'Design', type: 'intent' },
      { label: 'ASIC', type: 'constraint' },
      { label: 'Chip', type: 'constraint' },
      { label: 'Digital Logic', type: 'category' },
    ],
    bestMatchSlug: 'tinytapeout',
    matchReason: 'Learn digital design and get a real chip manufactured on silicon.',
    otherSlugs: ['edaplayground', 'hdlbits', 'nand2tetris', 'digital-logic'],
  },
  {
    keywords: ['compiler', 'assembly', 'optimize', 'godbolt', 'asm'],
    tags: [
      { label: 'Learning', type: 'intent' },
      { label: 'Compiler', type: 'constraint' },
      { label: 'Assembly', type: 'constraint' },
      { label: 'Computer Architecture', type: 'category' },
    ],
    bestMatchSlug: 'godbolt',
    matchReason: 'See real compiler output and assembly for C, C++, Rust and more.',
    otherSlugs: ['nand2tetris', 'digital-logic', 'riscv'],
  },
  {
    keywords: ['component', 'part', 'buy', 'source', 'price', 'datasheet'],
    tags: [
      { label: 'Research', type: 'intent' },
      { label: 'Components', type: 'constraint' },
      { label: 'Datasheets', type: 'constraint' },
      { label: 'Reference', type: 'category' },
    ],
    bestMatchSlug: 'octopart',
    matchReason: 'Best search engine for sourcing and pricing electronic components.',
    otherSlugs: ['digikey', 'snapeda', 'adafruit'],
  },
  {
    keywords: ['easyeda', 'jlcpcb', 'lcsc', 'online pcb'],
    tags: [
      { label: 'Design', type: 'intent' },
      { label: 'PCB', type: 'constraint' },
      { label: 'Online', type: 'constraint' },
      { label: 'PCB Design', type: 'category' },
    ],
    bestMatchSlug: 'easyeda',
    matchReason: 'Free browser-based EDA with direct JLCPCB/LCSC integration.',
    otherSlugs: ['kicad', 'opencircuit', 'snapeda'],
  },
  {
    keywords: ['embedded', 'firmware', 'rtos', 'mcu'],
    tags: [
      { label: 'Development', type: 'intent' },
      { label: 'Embedded', type: 'constraint' },
      { label: 'Firmware', type: 'constraint' },
      { label: 'Embedded Systems', type: 'category' },
    ],
    bestMatchSlug: 'platformio',
    matchReason: 'Professional cross-platform embedded development environment.',
    otherSlugs: ['esp-idf', 'arduino', 'stm32', 'hackster'],
  },
  {
    keywords: ['simulink', 'control', 'pid', 'matlab'],
    tags: [
      { label: 'Simulation', type: 'intent' },
      { label: 'Control Systems', type: 'constraint' },
      { label: 'PID', type: 'constraint' },
      { label: 'Robotics', type: 'category' },
    ],
    bestMatchSlug: 'matlab-simulink',
    matchReason: 'Industry-standard platform for control systems simulation and model-based design.',
    otherSlugs: ['gazebo', 'webots', 'octopart'],
  },
  {
    keywords: ['risc-v', 'riscv', 'cpu', 'architecture', 'isa'],
    tags: [
      { label: 'Reference', type: 'intent' },
      { label: 'RISC-V', type: 'constraint' },
      { label: 'CPU', type: 'constraint' },
      { label: 'Computer Architecture', type: 'category' },
    ],
    bestMatchSlug: 'riscv',
    matchReason: 'Official RISC-V ISA specifications and ecosystem resources.',
    otherSlugs: ['nand2tetris', 'godbolt', 'stm32', 'digital-logic'],
  },
  {
    keywords: ['kicad', 'gerber', 'footprint', 'symbol'],
    tags: [
      { label: 'Design', type: 'intent' },
      { label: 'KiCad', type: 'constraint' },
      { label: 'PCB', type: 'constraint' },
      { label: 'PCB Design', type: 'category' },
    ],
    bestMatchSlug: 'kicad',
    matchReason: 'Full open-source EDA suite with schematic capture and PCB layout.',
    otherSlugs: ['easyeda', 'altium', 'snapeda', 'opencircuit'],
  },
];

function findBestMatch(query: string): PredefinedQuery | null {
  const q = query.toLowerCase();

  let bestMatch: PredefinedQuery | null = null;
  let bestScore = 0;

  for (const predefined of predefinedQueries) {
    let score = 0;
    for (const keyword of predefined.keywords) {
      if (q.includes(keyword)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = predefined;
    }
  }

  return bestScore >= 1 ? bestMatch : null;
}

function fuzzySearch(query: string): Website[] {
  const q = query.toLowerCase();
  return websites
    .map((w) => {
      let score = 0;
      if (w.name.toLowerCase().includes(q)) score += 10;
      if (w.description.toLowerCase().includes(q)) score += 5;
      if (w.tags.some((t) => t.toLowerCase().includes(q))) score += 3;
      if (w.category.replace(/-/g, ' ').includes(q)) score += 2;
      if (w.purposes.some((p) => p.includes(q))) score += 1;
      return { website: w, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.website);
}

export function aiSearch(query: string): AISearchResult | null {
  if (!query.trim()) return null;

  const predefined = findBestMatch(query);

  if (predefined) {
    const bestMatch = websites.find((w) => w.slug === predefined.bestMatchSlug);
    const otherResults = predefined.otherSlugs
      .map((slug) => websites.find((w) => w.slug === slug))
      .filter(Boolean) as Website[];

    if (bestMatch) {
      return {
        query,
        interpretedTags: predefined.tags.map((t) => ({ label: t.label, tags: [t.label] })),
        bestMatch,
        matchReason: predefined.matchReason,
        otherResults: otherResults.slice(0, 4),
      };
    }
  }

  const fuzzyResults = fuzzySearch(query);
  if (fuzzyResults.length > 0) {
    return {
      query,
      interpretedTags: [
        { label: 'Intent', tags: ['Search'] },
        { label: 'Results', tags: [`${fuzzyResults.length} found`] },
      ],
      bestMatch: fuzzyResults[0],
      matchReason: `Best match for "${query}" based on name, description and tags.`,
      otherResults: fuzzyResults.slice(1, 5),
    };
  }

  return null;
}
