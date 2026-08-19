import type { Website } from '@/types';

export const websites: Website[] = [
  {
    id: '1',
    slug: 'random-nerd-tutorials',
    name: 'Random Nerd Tutorials',
    url: 'https://randomnerdtutorials.com',
    description: 'Detailed ESP32, ESP8266, Arduino and IoT tutorials with practical projects.',
    longDescription:
      'Random Nerd Tutorials is one of the most comprehensive resources for learning about ESP32, ESP8266, Arduino, and IoT. The site offers step-by-step tutorials, project guides, and in-depth articles covering embedded systems development from beginner to advanced levels.',
    categories: ['embedded-systems'],
    topics: ['ESP32', 'ESP8266', 'Arduino', 'IoT', 'Sensors', 'Home Automation'],
    contentTypes: ['tutorials', 'projects'],
    difficulty: ['beginner', 'intermediate'],
    tags: ['ESP32', 'Arduino', 'IoT', 'Projects'],
    featured: true,
  },
  {
    id: '2',
    slug: 'last-minute-engineers',
    name: 'Last Minute Engineers',
    url: 'https://lastminuteengineers.com',
    description: 'Explaining electronics and programming in a fun and easy-to-understand way.',
    longDescription:
      'Last Minute Engineers provides clear, concise tutorials and guides for electronics and programming. The site is particularly strong in Arduino, ESP32, and IoT content, with well-structured learning paths for beginners.',
    categories: ['embedded-systems', 'electronics'],
    topics: ['Arduino', 'ESP32', 'IoT', 'Sensors', 'Electronics Basics'],
    contentTypes: ['tutorials', 'learning'],
    difficulty: ['beginner'],
    tags: ['Arduino', 'ESP32', 'IoT', 'Beginner'],
    featured: true,
  },
  {
    id: '3',
    slug: 'circuit-digest',
    name: 'Circuit Digest',
    url: 'https://circuitdigest.com',
    description: 'Electronics tutorials, projects and circuits for engineers and hobbyists.',
    longDescription:
      'Circuit Digest is a comprehensive electronics resource offering tutorials, project guides, and circuit diagrams. The site covers embedded systems, PCB design, IoT, and general electronics topics.',
    categories: ['embedded-systems', 'electronics'],
    topics: ['Circuits', 'Arduino', 'IoT', 'PCB', 'Projects'],
    contentTypes: ['tutorials', 'projects', 'documentation'],
    difficulty: ['beginner', 'intermediate'],
    tags: ['Circuits', 'Arduino', 'IoT', 'Projects'],
    featured: true,
  },
  {
    id: '4',
    slug: 'adafruit',
    name: 'Adafruit',
    url: 'https://adafruit.com',
    description: 'Open-source hardware and maker community with tutorials and learning system.',
    longDescription:
      'Adafruit is a leading open-source hardware company offering a wide range of electronics components, development boards, and extensive learning resources. Their learning system covers electronics, programming, and maker projects.',
    categories: ['embedded-systems', 'electronics'],
    topics: ['Arduino', 'CircuitPython', 'Sensors', 'Wearable', 'IoT'],
    contentTypes: ['tutorials', 'documentation', 'tools'],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tags: ['Hardware', 'Sensors', 'CircuitPython', 'Maker'],
    featured: true,
  },
  {
    id: '5',
    slug: 'sparkfun',
    name: 'SparkFun Electronics',
    url: 'https://sparkfun.com',
    description: 'Open-source hardware company with tutorials and component guides.',
    longDescription:
      'SparkFun Electronics is an open-source hardware provider offering a vast selection of electronic components, development boards, and educational resources. Their hookup guides and tutorials cover everything from basic electronics to advanced embedded systems.',
    categories: ['embedded-systems', 'electronics'],
    topics: ['Arduino', 'Sensors', 'Components', 'Open Source Hardware'],
    contentTypes: ['tutorials', 'documentation'],
    difficulty: ['beginner', 'intermediate'],
    tags: ['Hardware', 'Sensors', 'Open Source', 'Components'],
    featured: true,
  },
  {
    id: '6',
    slug: 'arduino',
    name: 'Arduino',
    url: 'https://arduino.cc',
    description: 'Official Arduino documentation, project hub and community.',
    longDescription:
      'The official Arduino website provides documentation, project examples, libraries, and community resources for all Arduino boards and the Arduino IDE. The primary resource for Arduino development.',
    categories: ['embedded-systems'],
    topics: ['Arduino', 'IoT', 'Projects', 'Libraries'],
    contentTypes: ['documentation', 'projects', 'tools'],
    difficulty: ['beginner', 'intermediate'],
    tags: ['Arduino', 'Official', 'Documentation', 'Projects'],
    featured: true,
  },
  {
    id: '7',
    slug: 'all-about-circuits',
    name: 'All About Circuits',
    url: 'https://allaboutcircuits.com',
    description: 'Comprehensive electronics education, textbook and community forums.',
    longDescription:
      'All About Circuits offers a free online textbook, worksheets, and forums covering fundamental electronics concepts. It is one of the best resources for learning electronics theory from the ground up.',
    categories: ['electronics'],
    topics: ['Circuits', 'Theory', 'Components', 'Textbook'],
    contentTypes: ['learning', 'documentation'],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tags: ['Textbook', 'Theory', 'Circuits', 'Education'],
    featured: true,
  },
  {
    id: '8',
    slug: 'electronics-tutorials',
    name: 'Electronics-Tutorials',
    url: 'https://electronics-tutorials.ws',
    description: 'Free online electronics tutorials covering analog and digital circuits.',
    longDescription:
      'Electronics-Tutorials provides clear, well-structured tutorials on electronics fundamentals including resistors, capacitors, transistors, digital logic, and more. A great resource for building foundational knowledge.',
    categories: ['electronics'],
    topics: ['Circuits', 'Analog', 'Digital', 'Components', 'Theory'],
    contentTypes: ['tutorials', 'learning'],
    difficulty: ['beginner', 'intermediate'],
    tags: ['Tutorials', 'Analog', 'Digital', 'Fundamentals'],
    featured: true,
  },
  {
    id: '9',
    slug: 'hackster',
    name: 'Hackster.io',
    url: 'https://hackster.io',
    description: 'Community platform for hardware projects, tutorials and competitions.',
    longDescription:
      'Hackster.io is a community for hardware engineers and makers to share projects, participate in contests, and learn from each other. The platform covers embedded systems, IoT, robotics, and maker projects.',
    categories: ['embedded-systems', 'electronics', 'robotics'],
    topics: ['Projects', 'IoT', 'Competitions', 'Community'],
    contentTypes: ['projects', 'tutorials'],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    tags: ['Community', 'Projects', 'IoT', 'Competitions'],
    featured: false,
  },
  {
    id: '10',
    slug: 'instructables',
    name: 'Instructables',
    url: 'https://instructables.com',
    description: 'Step-by-step maker projects covering electronics, robotics and more.',
    longDescription:
      'Instructables is a popular platform for sharing step-by-step project guides. The electronics and robotics sections contain hundreds of practical projects from beginner to advanced levels.',
    categories: ['electronics', 'robotics'],
    topics: ['Projects', 'Maker', '3D Printing', 'Robotics'],
    contentTypes: ['projects'],
    difficulty: ['beginner', 'intermediate'],
    tags: ['Projects', 'Maker', 'DIY', 'Community'],
    featured: false,
  },
  {
    id: '11',
    slug: 'ros-org',
    name: 'ROS.org',
    url: 'https://ros.org',
    description: 'Official Robot Operating System documentation and ecosystem.',
    longDescription:
      'ROS.org is the official website for the Robot Operating System, providing documentation, tutorials, packages, and community resources for robotics development using ROS and ROS 2.',
    categories: ['robotics'],
    topics: ['ROS', 'ROS 2', 'Navigation', 'Computer Vision', 'Control'],
    contentTypes: ['documentation', 'tutorials'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['ROS', 'ROS 2', 'Robotics', 'Official'],
    featured: true,
  },
  {
    id: '12',
    slug: 'platformio',
    name: 'PlatformIO',
    url: 'https://platformio.org',
    description: 'Professional embedded development ecosystem and IDE.',
    longDescription:
      'PlatformIO is a professional collaborative platform for embedded development. It supports multiple development frameworks, boards, and IDEs, making cross-platform embedded development seamless.',
    categories: ['embedded-systems'],
    topics: ['Arduino', 'ESP-IDF', 'Framework', 'IDE', 'Libraries'],
    contentTypes: ['documentation', 'tools'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['IDE', 'Framework', 'Multi-platform', 'Build System'],
    featured: false,
  },
  {
    id: '13',
    slug: 'microchip',
    name: 'Microchip Technology',
    url: 'https://microchip.com',
    description: 'Official Microchip documentation, application notes and development tools.',
    longDescription:
      'Microchip Technology provides official documentation, application notes, data sheets, and development tools for AVR, PIC, and SAM microcontrollers as well as development boards like the Arduino-based boards.',
    categories: ['embedded-systems'],
    topics: ['AVR', 'PIC', 'Microcontrollers', 'MPLAB', 'Development Boards'],
    contentTypes: ['documentation', 'tools'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['Microcontrollers', 'Official', 'Documentation', 'Datasheets'],
    featured: false,
  },
  {
    id: '14',
    slug: 'stmicroelectronics',
    name: 'STMicroelectronics',
    url: 'https://st.com',
    description: 'STM32 documentation, development tools and reference manuals.',
    longDescription:
      'STMicroelectronics provides comprehensive documentation and tools for STM32 microcontrollers, including data sheets, reference manuals, application notes, and the STM32CubeIDE development environment.',
    categories: ['embedded-systems'],
    topics: ['STM32', 'Microcontrollers', 'CubeIDE', 'HAL', 'Reference Manuals'],
    contentTypes: ['documentation', 'tools'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['STM32', 'Official', 'Documentation', 'Datasheets'],
    featured: false,
  },
  {
    id: '15',
    slug: 'texas-instruments',
    name: 'Texas Instruments',
    url: 'https://ti.com',
    description: 'TI documentation, reference designs and development tools for embedded systems.',
    longDescription:
      'Texas Instruments provides extensive documentation, reference designs, and development tools for their microcontrollers, analog ICs, and processors. Their resource library covers the full range of TI products.',
    categories: ['embedded-systems', 'electronics'],
    topics: ['MCU', 'Analog', 'Reference Designs', 'Code Composer Studio'],
    contentTypes: ['documentation', 'tools'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['Official', 'Documentation', 'Reference Designs', 'Datasheets'],
    featured: false,
  },
  {
    id: '16',
    slug: 'esp-idf',
    name: 'ESP-IDF Documentation',
    url: 'https://docs.espressif.com/projects/esp-idf',
    description: 'Official Espressif IoT Development Framework documentation.',
    longDescription:
      'ESP-IDF is the official development framework for ESP32 and other Espressif chips. The documentation provides comprehensive guides for building IoT applications with Wi-Fi, Bluetooth, and many other peripherals.',
    categories: ['embedded-systems'],
    topics: ['ESP32', 'ESP-IDF', 'IoT', 'Wi-Fi', 'Bluetooth'],
    contentTypes: ['documentation', 'tutorials'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['ESP32', 'Official', 'Framework', 'IoT'],
    featured: false,
  },
  {
    id: '17',
    slug: 'buildrobot-ai',
    name: 'Build Robot AI',
    url: 'https://buildrobot.ai',
    description: 'Tutorials and resources for building intelligent robots with AI.',
    longDescription:
      'Build Robot AI focuses on combining robotics with artificial intelligence, offering tutorials and projects on topics like computer vision, path planning, and autonomous navigation.',
    categories: ['robotics'],
    topics: ['AI', 'Computer Vision', 'Autonomous Navigation', 'ROS'],
    contentTypes: ['tutorials', 'projects'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['AI', 'Computer Vision', 'ROS', 'Autonomous'],
    featured: false,
  },
  {
    id: '18',
    slug: 'robot-electronics',
    name: 'Robot Electronics',
    url: 'https://robot-electronics.co.uk',
    description: 'Technical resources for robotics, sensors and motor control.',
    longDescription:
      'Robot Electronics provides technical articles and resources on robotics sensors, motor controllers, and embedded systems. The site is known for detailed technical explanations of common robotics components.',
    categories: ['robotics', 'electronics'],
    topics: ['Sensors', 'Motor Control', 'Servo', 'I2C', 'Serial'],
    contentTypes: ['documentation', 'tutorials'],
    difficulty: ['intermediate', 'advanced'],
    tags: ['Sensors', 'Motor Control', 'Technical', 'Reference'],
    featured: false,
  },
];

export function getWebsiteBySlug(slug: string): Website | undefined {
  return websites.find((w) => w.slug === slug);
}

export function getFeaturedWebsites(): Website[] {
  return websites.filter((w) => w.featured);
}

export function getWebsitesByCategory(categorySlug: string): Website[] {
  return websites.filter((w) => w.categories.includes(categorySlug as never));
}

export function searchWebsites(query: string): Website[] {
  const q = query.toLowerCase();
  return websites.filter(
    (w) =>
      w.name.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      w.topics.some((t) => t.toLowerCase().includes(q)) ||
      w.tags.some((t) => t.toLowerCase().includes(q))
  );
}
