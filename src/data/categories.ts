import type { Category } from '@/types';

export const categories: Category[] = [
  {
    slug: 'electronics-circuitry',
    name: 'Electronics & Circuitry',
    description: 'Circuit simulation, component fundamentals, and electronics design tools.',
    icon: 'Zap',
    topics: ['Circuit Simulation', 'SPICE', 'Analog', 'Digital', 'Components', 'Oscilloscope'],
  },
  {
    slug: 'electrical-power',
    name: 'Electrical & Power Engineering',
    description: 'Power systems, energy conversion, and electrical engineering utilities.',
    icon: 'Lightbulb',
    topics: ['Power Systems', 'Transformers', 'Motor Drives', 'Energy', 'AC/DC', 'Grid'],
  },
  {
    slug: 'embedded-systems-iot',
    name: 'Embedded Systems & IoT',
    description: 'Microcontroller programming, RTOS, IoT platforms and firmware toolchains.',
    icon: 'Cpu',
    topics: ['ESP32', 'Arduino', 'STM32', 'Firmware', 'RTOS', 'IoT'],
  },
  {
    slug: 'pcb-design-eda',
    name: 'PCB Design & EDA',
    description: 'Schematic capture, PCB layout, Gerber export and electronic design automation.',
    icon: 'CircuitBoard',
    topics: ['KiCad', 'EasyEDA', 'Schematic', 'Gerber', 'Footprints', '3D Preview'],
  },
  {
    slug: 'digital-logic-hdl',
    name: 'Digital Logic & Hardware Description',
    description: 'Verilog, VHDL, FPGA synthesis and digital logic design tools.',
    icon: 'Binary',
    topics: ['Verilog', 'VHDL', 'SystemVerilog', 'FPGA', 'Synthesis', 'Digital Design'],
  },
  {
    slug: 'computer-architecture-chips',
    name: 'Computer Architecture & Chips',
    description: 'CPU architecture, ISA references, RISC-V, ARM and SoC platforms.',
    icon: 'Server',
    topics: ['RISC-V', 'ARM', 'MIPS', 'CPU Design', 'ISA', 'SoC'],
  },
  {
    slug: 'robotics-control',
    name: 'Robotics & Control Systems',
    description: 'Robot simulation, control theory, ROS, sensors and actuator tools.',
    icon: 'Bot',
    topics: ['ROS', 'PID Control', 'Motion Planning', 'Sensors', 'Actuators', 'SLAM'],
  },
  {
    slug: 'calculators-reference',
    name: 'Calculators & Technical Reference',
    description: 'Engineering calculators, datasheets, reference tables and quick tools.',
    icon: 'Calculator',
    topics: ['Calculators', 'Datasheets', 'Reference Tables', 'Unit Conversion', 'Formulas'],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
