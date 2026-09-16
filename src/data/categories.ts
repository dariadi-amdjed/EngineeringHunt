import type { Category } from '@/types';

export const categories: Category[] = [
  {
    slug: 'embedded-computer-engineering',
    name: 'Embedded Systems & Computer Engineering',
    description: 'MCU firmware, RTOS, computer architecture, HDL/FPGA, ISA references, and compiler toolchains.',
    icon: 'Cpu',
    topics: ['Arduino', 'ESP32', 'STM32', 'RTOS', 'Verilog', 'FPGA', 'RISC-V', 'CPU Design'],
  },
  {
    slug: 'robotics-control',
    name: 'Robotics & Control Systems',
    description: 'Robot simulation, control theory, ROS, sensors, actuators, and model-based design.',
    icon: 'Bot',
    topics: ['ROS', 'Robot Simulation', 'PID Control', 'Motion Planning', 'Sensors', 'Simulink'],
  },
  {
    slug: 'electronics-hardware-design',
    name: 'Electronics & Hardware Design',
    description: 'Circuit simulation, SPICE, schematic capture, PCB layout, and component exploration.',
    icon: 'Zap',
    topics: ['Circuit Simulation', 'SPICE', 'PCB Design', 'Schematic', 'Components', 'Analog'],
  },
  {
    slug: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    description: 'AI-assisted engineering platforms, ML frameworks, and intelligent design tools.',
    icon: 'Sparkles',
    topics: ['AI Copilot', 'Machine Learning', 'Neural Networks', 'AI Frameworks', 'Intelligent Design'],
  },
  {
    slug: 'engineering-resources-tools',
    name: 'Engineering Resources & Tools',
    description: 'Documentation, learning platforms, component sourcing, reference materials, and community hubs.',
    icon: 'Globe',
    topics: ['Documentation', 'Tutorials', 'Datasheets', 'Component Search', 'Community', 'Learning'],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
