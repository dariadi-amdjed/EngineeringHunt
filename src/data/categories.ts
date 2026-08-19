import type { Category, CategorySlug } from '@/types';

export const categories: Category[] = [
  {
    slug: 'embedded-systems',
    name: 'Embedded Systems',
    description: 'Microcontrollers, firmware, IoT, RTOS and embedded development.',
    icon: 'Cpu',
    topics: ['ESP32', 'Arduino', 'STM32', 'Raspberry Pi', 'IoT', 'RTOS', 'Embedded C', 'Firmware'],
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    description: 'Circuits, components, PCB design, simulation and electronics projects.',
    icon: 'CircuitBoard',
    topics: ['Circuits', 'PCB', 'Sensors', 'Components', 'Simulation', 'Oscilloscope', 'Soldering'],
  },
  {
    slug: 'robotics',
    name: 'Robotics',
    description: 'Robot projects, sensors, motors, ROS and control systems.',
    icon: 'Bot',
    topics: ['ROS', 'Motors', 'Sensors', 'Control', 'Navigation', 'Computer Vision', 'Actuators'],
  },
];

export function getCategoryBySlug(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
