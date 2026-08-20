import type { Website } from '@/types';
import { isToolOpenSource } from '@/types';

export const websites: Website[] = [
  // ── Electronics & Circuitry ──────────────────────────────────────────
  {
    id: '1',
    slug: 'wokwi',
    name: 'Wokwi',
    url: 'https://wokwi.com',
  type: 'web-app',
    imageUrl: 'https://wokwi.com/favicon.ico',
    description: 'Online electronics simulator for Arduino, ESP32, and Raspberry Pi Pico.',
    longDescription:
      'Wokwi is a browser-based electronics simulator that supports Arduino, ESP32, Raspberry Pi Pico, and other microcontrollers. Simulate circuits with sensors, LEDs, displays, and custom parts — entirely in your browser with no hardware required.',
    category: 'electronics-circuitry',
    purposes: ['simulator'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/nicholasgasior/wokwi-docs',
    tags: ['ESP32', 'Arduino', 'Circuit Simulation', 'Browser', 'Microcontroller'],
    featured: true,
  },
  {
    id: '2',
    slug: 'falstad',
    name: 'Falstad Circuit Simulator',
    url: 'https://falstad.com/circuit',
  type: 'web-app',
    imageUrl: 'https://falstad.com/circuit/favicon.ico',
    description: 'Interactive browser-based circuit simulator with real-time visualization.',
    longDescription:
      "Falstad's circuit simulator is a free, browser-based tool that provides real-time visualization of voltage, current, and component behavior. It supports analog, digital, and mixed-signal circuits and is excellent for learning electronics fundamentals.",
    category: 'electronics-circuitry',
    purposes: ['simulator'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/sharpie7/EESchema',
    tags: ['Circuit Simulation', 'Analog', 'Digital', 'Interactive', 'Real-time'],
    featured: true,
  },
  {
    id: '3',
    slug: 'circuitlab',
    name: 'CircuitLab',
    url: 'https://circuitlab.com',
  type: 'web-app',
    imageUrl: 'https://circuitlab.com/favicon.ico',
    description: 'Browser-based schematic editor and circuit simulator with SPICE analysis.',
    longDescription:
      'CircuitLab offers an online schematic editor and circuit simulator with SPICE analysis, Bode plots, and real-time waveform viewing. Widely used in EE education and professional circuit prototyping.',
    category: 'electronics-circuitry',
    purposes: ['simulator'],
    pricing: 'freemium',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['Circuit Simulator', 'SPICE', 'Schematics', 'Education', 'Waveforms'],
    featured: true,
  },
  {
    id: '4',
    slug: 'tinkercad',
    name: 'Tinkercad Circuits',
    url: 'https://tinkercad.com',
  type: 'web-app',
    imageUrl: 'https://tinkercad.com/favicon.ico',
    description: 'Free browser-based electronics simulation and 3D design tool by Autodesk.',
    longDescription:
      'Tinkercad is a free, web-based 3D design, electronics simulation, and coding tool from Autodesk. Popular for education, it offers circuit simulation with Arduino and basic 3D modeling for beginners.',
    category: 'electronics-circuitry',
    purposes: ['simulator'],
    pricing: 'free',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['3D Design', 'Circuits', 'Arduino', 'Education', 'Autodesk'],
    featured: true,
  },
  {
    id: '5',
    slug: 'all-about-circuits',
    name: 'All About Circuits',
    url: 'https://allaboutcircuits.com',
  type: 'web-app',
    description: 'Free online textbook, worksheets, and forums covering electronics fundamentals.',
    longDescription:
      'All About Circuits offers a free online textbook, worksheets, and forums covering fundamental electronics concepts. One of the best resources for learning electronics theory from the ground up.',
    category: 'electronics-circuitry',
    purposes: ['community-docs'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    interactivity: 'static-document',
    openSource: false,
    tags: ['Textbook', 'Theory', 'Circuits', 'Education', 'Worksheets'],
    featured: true,
  },

  // ── Electrical & Power Engineering ──────────────────────────────────
  {
    id: '6',
    slug: 'okawa-electric',
    name: 'Okawa Electric Design',
    url: 'https://www.okawa-denshi.jp',
  type: 'web-app',
    description: 'Free online calculators for filters, transformers, and electrical components.',
    longDescription:
      'Okawa Electric Design provides a comprehensive suite of free online calculators for active filters, passive filters, transformers, transmission lines, and various electrical components. Essential quick-reference tools for EE design.',
    category: 'electrical-power',
    purposes: ['calculator'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'input-output-tool',
    openSource: false,
    tags: ['Filter Design', 'Transformer', 'Calculator', 'Passive Components', 'Japanese'],
    featured: true,
  },
  {
    id: '7',
    slug: 'eep-web-tools',
    name: 'EEP Web Tools',
    url: 'https://electrical-engineering-portal.com/interactive-tools',
  type: 'web-app',
    description: 'Collection of electrical engineering calculators and interactive tools.',
    longDescription:
      'EEP Web Tools offers a range of interactive electrical engineering calculators including cable sizing, short circuit, motor starting, transformer, and arc flash analysis tools. Practical utilities for working engineers.',
    category: 'electrical-power',
    purposes: ['calculator', 'datasheet-reference'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'input-output-tool',
    openSource: false,
    tags: ['Calculator', 'Cable Sizing', 'Transformer', 'Arc Flash', 'Power Systems'],
    featured: true,
  },
  {
    id: '8',
    slug: 'everycircuit',
    name: 'EveryCircuit',
    url: 'https://everycircuit.com',
  type: 'web-app',
    description: 'Interactive circuit simulator with animated current flow visualization.',
    longDescription:
      'EveryCircuit is an interactive circuit simulator that shows animated current flow, voltage propagation, and component behavior in real time. Available on web and mobile for learning and prototyping analog and digital circuits.',
    category: 'electrical-power',
    purposes: ['simulator'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web', 'mobile'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['Circuit Simulator', 'Animated Current', 'Interactive', 'Mobile'],
    featured: false,
  },
  {
    id: '9',
    slug: 'electronics-tutorials',
    name: 'Electronics-Tutorials.ws',
    url: 'https://electronics-tutorials.ws',
  type: 'web-app',
    description: 'Free online tutorials covering analog and digital electronics fundamentals.',
    longDescription:
      'Electronics-Tutorials provides clear, well-structured tutorials on electronics fundamentals including resistors, capacitors, transistors, digital logic, and more. A great resource for building foundational knowledge.',
    category: 'electrical-power',
    purposes: ['community-docs'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'static-document',
    openSource: false,
    tags: ['Tutorials', 'Analog', 'Digital', 'Fundamentals', 'Electronics Theory'],
    featured: false,
  },

  // ── Embedded Systems & IoT ──────────────────────────────────────────
  {
    id: '10',
    slug: 'arduino',
    name: 'Arduino',
    url: 'https://arduino.cc',
  type: 'web-app',
    description: 'Official Arduino documentation, project hub and community.',
    longDescription:
      'The official Arduino website provides documentation, project examples, libraries, and community resources for all Arduino boards and the Arduino IDE. The primary resource for Arduino development.',
    category: 'embedded-systems-iot',
    purposes: ['community-docs'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['beginner'],
    interactivity: 'static-document',
    openSource: true,
    githubUrl: 'https://github.com/arduino',
    tags: ['Arduino', 'Microcontroller', 'IoT', 'Official', 'IDE'],
    featured: true,
  },
  {
    id: '11',
    slug: 'esp-idf',
    name: 'ESP-IDF Documentation',
    url: 'https://docs.espressif.com/projects/esp-idf',
  type: 'desktop-app',
    description: 'Official Espressif IoT Development Framework documentation.',
    longDescription:
      'ESP-IDF is the official development framework for ESP32 and other Espressif chips. The documentation provides comprehensive guides for building IoT applications with Wi-Fi, Bluetooth, and many other peripherals.',
    category: 'embedded-systems-iot',
    purposes: ['community-docs'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['windows', 'mac', 'linux'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'static-document',
    openSource: true,
    githubUrl: 'https://github.com/espressif/esp-idf',
    tags: ['ESP32', 'Official', 'Framework', 'IoT', 'Wi-Fi', 'Bluetooth'],
    featured: true,
  },
  {
    id: '12',
    slug: 'platformio',
    name: 'PlatformIO',
    url: 'https://platformio.org',
  type: 'desktop-app',
    description: 'Professional embedded development ecosystem and IDE.',
    longDescription:
      'PlatformIO is a professional collaborative platform for embedded development. It supports multiple development frameworks, boards, and IDEs, making cross-platform embedded development seamless.',
    category: 'embedded-systems-iot',
    purposes: ['eda-tool'],
    pricing: 'freemium',
    authentication: 'signup-required',
    platform: ['windows', 'mac', 'linux'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'input-output-tool',
    openSource: true,
    githubUrl: 'https://github.com/platformio',
    tags: ['IDE', 'Framework', 'Multi-platform', 'Build System', 'Embedded'],
    featured: true,
  },
  {
    id: '13',
    slug: 'adafruit',
    name: 'Adafruit',
    url: 'https://adafruit.com',
  type: 'web-app',
    description: 'Open-source hardware company with tutorials and learning system.',
    longDescription:
      'Adafruit is a leading open-source hardware company offering electronics components, development boards, and extensive learning resources. Their learning system covers electronics, programming, and maker projects.',
    category: 'embedded-systems-iot',
    purposes: ['community-docs'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'static-document',
    openSource: true,
    githubUrl: 'https://github.com/adafruit',
    tags: ['Hardware', 'Sensors', 'CircuitPython', 'Maker', 'Tutorials'],
    featured: true,
  },
  {
    id: '14',
    slug: 'hackster',
    name: 'Hackster.io',
    url: 'https://hackster.io',
  type: 'web-app',
    description: 'Community platform for hardware projects, tutorials and competitions.',
    longDescription:
      'Hackster.io is a community for hardware engineers and makers to share projects, participate in contests, and learn from each other. The platform covers embedded systems, IoT, robotics, and maker projects.',
    category: 'embedded-systems-iot',
    purposes: ['community-docs'],
    pricing: 'free',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate', 'advanced'],
    interactivity: 'static-document',
    openSource: false,
    tags: ['Community', 'Projects', 'IoT', 'Competitions', 'Hardware'],
    featured: true,
  },

  // ── PCB Design & EDA ────────────────────────────────────────────────
  {
    id: '15',
    slug: 'easyeda',
    name: 'EasyEDA',
    url: 'https://easyeda.com',
  type: 'web-app',
    description: 'Free browser-based EDA tool with schematic, PCB layout and component library.',
    longDescription:
      'EasyEDA is a free, web-based EDA tool offering schematic capture, PCB layout, and a massive component library integrated with LCSC and JLCPCB. Supports direct PCB ordering from the design interface.',
    category: 'pcb-design-eda',
    purposes: ['eda-tool'],
    pricing: 'free',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['PCB', 'Schematic', 'LCSC', 'JLCPCB', 'Online EDA', 'Gerber'],
    featured: true,
  },
  {
    id: '16',
    slug: 'kicad',
    name: 'KiCad',
    url: 'https://kicad.org',
  type: 'desktop-app',
    imageUrl: 'https://kicad.org/favicon.ico',
    description: 'Open-source electronic design automation suite for PCB design.',
    longDescription:
      'KiCad is a free and open-source EDA suite for schematic capture and PCB layout. It features a 3D board viewer, extensive component libraries, and Gerber file export for manufacturing.',
    category: 'pcb-design-eda',
    purposes: ['eda-tool'],
    pricing: 'open-source',
    authentication: 'no-account',
    platform: ['windows', 'mac', 'linux'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/KiCad/kicad-source-mirror',
    tags: ['PCB', 'Schematic', 'Open Source', 'EDA', '3D Viewer', 'Gerber'],
    featured: true,
  },
  {
    id: '17',
    slug: 'opencircuit',
    name: 'OpenCircuit',
    url: 'https://opencircuit.io',
  type: 'web-app',
    description: 'Online PCB design tool with component library and 3D preview.',
    longDescription:
      'OpenCircuit is an online PCB design tool featuring a large component library, schematic editor, and 3D board preview. It aims to make PCB design accessible directly in the browser.',
    category: 'pcb-design-eda',
    purposes: ['eda-tool'],
    pricing: 'freemium',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['PCB', 'Online', 'Schematic', '3D Preview', 'Component Library'],
    featured: false,
  },
  {
    id: '18',
    slug: 'snapeda',
    name: 'SnapEDA',
    url: 'https://snapeda.com',
  type: 'web-app',
    description: 'Free PCB component library with symbols, footprints and 3D models.',
    longDescription:
      'SnapEDA is a free search engine for electronic component symbols, PCB footprints, and 3D models. Supports direct import into KiCad, Eagle, Altium, and other EDA tools.',
    category: 'pcb-design-eda',
    purposes: ['datasheet-reference'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['intermediate'],
    interactivity: 'input-output-tool',
    openSource: false,
    tags: ['Component Library', 'Symbols', 'Footprints', '3D Models', 'Cross-EDA'],
    featured: false,
  },
  {
    id: '19',
    slug: 'altium',
    name: 'Altium Designer',
    url: 'https://altium.com',
  type: 'desktop-app',
    description: 'Professional PCB design suite with unified schematic and layout.',
    longDescription:
      'Altium Designer is a premium, industry-leading PCB design platform featuring unified schematic capture, board layout, rigid-flex design, and extensive manufacturing output generation.',
    category: 'pcb-design-eda',
    purposes: ['eda-tool'],
    pricing: 'paid',
    authentication: 'signup-required',
    platform: ['windows'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['PCB', 'Professional', 'Rigid-Flex', 'Industry Standard', 'EDA'],
    featured: false,
  },

  // ── Digital Logic & HDL ─────────────────────────────────────────────
  {
    id: '20',
    slug: 'edaplayground',
    name: 'EDA Playground',
    url: 'https://edaplayground.com',
  type: 'web-app',
    description: 'Browser-based Verilog/SystemVerilog/VHDL simulation environment.',
    longDescription:
      'EDA Playground is an online platform for running HDL simulations in the browser. Supports Verilog, SystemVerilog, and VHDL with multiple simulators (Icarus, VCS, ModelSim) and waveform viewers.',
    category: 'digital-logic-hdl',
    purposes: ['simulator'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['HDL', 'Simulation', 'Verilog', 'SystemVerilog', 'VHDL', 'Browser'],
    featured: true,
  },
  {
    id: '21',
    slug: 'tinytapeout',
    name: 'Tiny Tapeout',
    url: 'https://tinytapeout.com',
  type: 'web-app',
    description: 'Learn digital design and build real chips on tiny silicon tiles.',
    longDescription:
      'Tiny Tapeout is an educational project that lets you learn digital design, design real chips using HDL or gate-level, and get them manufactured on low-cost silicon. An accessible path from learning to a real ASIC.',
    category: 'digital-logic-hdl',
    purposes: ['simulator', 'community-docs'],
    pricing: 'freemium',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/TinyTapeout',
    tags: ['ASIC', 'Digital Design', 'Gate Level', 'Chip', 'Education', 'Silicon'],
    featured: true,
  },
  {
    id: '22',
    slug: 'iverilog',
    name: 'Icarus Verilog',
    url: 'https://github.com/steveicarus/iverilog',
  type: 'desktop-app',
    description: 'Open-source Verilog simulation and synthesis tool.',
    longDescription:
      'Icarus Verilog is a free Verilog simulation and synthesis tool. It compiles Verilog and partial SystemVerilog code, commonly used for HDL simulation, testbenches, and educational digital design.',
    category: 'digital-logic-hdl',
    purposes: ['simulator'],
    pricing: 'open-source',
    authentication: 'no-account',
    platform: ['linux', 'mac'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'input-output-tool',
    openSource: true,
    githubUrl: 'https://github.com/steveicarus/iverilog',
    tags: ['Verilog', 'Simulation', 'HDL', 'Open Source', 'CLI'],
    featured: false,
  },
  {
    id: '23',
    slug: 'yosys',
    name: 'Yosys',
    url: 'https://github.com/YosysHQ/yosys',
  type: 'desktop-app',
    description: 'Open-source Verilog synthesis framework for FPGA and ASIC.',
    longDescription:
      'Yosys is a comprehensive open-source Verilog synthesis framework. Supports optimization, mapping, and technology-independent formal verification for FPGA and ASIC flows.',
    category: 'digital-logic-hdl',
    purposes: ['eda-tool'],
    pricing: 'open-source',
    authentication: 'no-account',
    platform: ['linux', 'mac'],
    difficulty: ['advanced'],
    interactivity: 'input-output-tool',
    openSource: true,
    githubUrl: 'https://github.com/YosysHQ/yosys',
    tags: ['Synthesis', 'FPGA', 'Open Source', 'Formal Verification', 'ASIC'],
    featured: false,
  },
  {
    id: '24',
    slug: 'hdlbits',
    name: 'HDLBits',
    url: 'https://hdlbits.01xz.net',
  type: 'web-app',
    description: 'Interactive Verilog practice problems with built-in simulation.',
    longDescription:
      'HDLBits is a collection of small Verilog practice problems with an in-browser simulator. Covers combinational logic, sequential logic, circuits, and more — an excellent hands-on resource for learning digital design.',
    category: 'digital-logic-hdl',
    purposes: ['simulator'],
    pricing: 'free',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['Verilog', 'Practice', 'Education', 'Interactive', 'Digital Logic'],
    featured: false,
  },

  // ── Computer Architecture & Chips ───────────────────────────────────
  {
    id: '25',
    slug: 'nand2tetris',
    name: 'Nand2Tetris',
    url: 'https://nand2tetris.org',
  type: 'web-app',
    description: 'Build a complete computer from first principles — NAND gates to OS.',
    longDescription:
      'Nand2Tetris is a comprehensive course that walks you through building an entire computer system from scratch — starting with NAND gates and ending with a high-level language, compiler, OS, and Tetris game.',
    category: 'computer-architecture-chips',
    purposes: ['simulator'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['Computer Architecture', 'Digital Logic', 'Course', 'CPU Design', 'Fundamentals'],
    featured: true,
  },
  {
    id: '26',
    slug: 'riscv',
    name: 'RISC-V International',
    url: 'https://riscv.org',
  type: 'web-app',
    description: 'Official RISC-V instruction set architecture resources and specifications.',
    longDescription:
      'RISC-V International is the nonprofit managing the open RISC-V ISA. Provides ISA specifications, software ecosystem links, and member resources for RISC-V development.',
    category: 'computer-architecture-chips',
    purposes: ['datasheet-reference'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['advanced'],
    interactivity: 'static-document',
    openSource: true,
    githubUrl: 'https://github.com/riscv',
    tags: ['RISC-V', 'ISA', 'Open Architecture', 'CPU', 'Specification'],
    featured: true,
  },
  {
    id: '27',
    slug: 'godbolt',
    name: 'Compiler Explorer',
    url: 'https://godbolt.org',
  type: 'web-app',
    description: 'Interactive compiler explorer for C, C++, Rust, Assembly and more.',
    longDescription:
      'Compiler Explorer lets you write C, C++, Rust, Assembly, and other languages and see the resulting compiler output in real time. Essential for understanding code generation, optimization, and low-level behavior.',
    category: 'computer-architecture-chips',
    purposes: ['simulator'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/compiler-explorer/compiler-explorer',
    tags: ['Compiler', 'Assembly', 'Optimization', 'C++', 'RISC-V', 'ARM'],
    featured: true,
  },
  {
    id: '28',
    slug: 'stm32',
    name: 'STM32 Developer',
    url: 'https://stm32.com',
  type: 'web-app',
    description: 'STMicroelectronics STM32 microcontroller resources and tools.',
    longDescription:
      'The official STM32 portal provides documentation, development tools, HAL libraries, and training resources for the STM32 family of ARM Cortex-M microcontrollers.',
    category: 'computer-architecture-chips',
    purposes: ['datasheet-reference'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'static-document',
    openSource: false,
    tags: ['STM32', 'ARM Cortex-M', 'Microcontroller', 'HAL', 'CubeMX'],
    featured: false,
  },
  {
    id: '29',
    slug: 'digital-logic',
    name: 'Digital (Logic Simulator)',
    url: 'https://github.com/hneemann/Digital',
  type: 'desktop-app',
    description: 'Digital logic circuit simulator for learning computer architecture.',
    longDescription:
      'Digital is a digital logic circuit simulator that lets you design and simulate CPUs, ALUs, registers, and complex digital systems. Supports component libraries, VHDL import, and integrated circuit testing.',
    category: 'computer-architecture-chips',
    purposes: ['simulator'],
    pricing: 'open-source',
    authentication: 'no-account',
    platform: ['windows', 'mac', 'linux'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/hneemann/Digital',
    tags: ['Digital Logic', 'CPU Design', 'Simulator', 'Education', 'Open Source'],
    featured: false,
  },

  // ── Robotics & Control Systems ──────────────────────────────────────
  {
    id: '30',
    slug: 'webots',
    name: 'Webots',
    url: 'https://cyberbotics.com',
  type: 'desktop-app',
    description: 'Open-source mobile robot simulation software with physics engine.',
    longDescription:
      'Webots is an open-source robot simulation software for designing and prototyping robotic systems. Supports URDF models, ROS integration, and physics-based simulation with multiple engine options.',
    category: 'robotics-control',
    purposes: ['simulator'],
    pricing: 'open-source',
    authentication: 'no-account',
    platform: ['windows', 'mac', 'linux'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/cyberbotics/webots',
    tags: ['Robotics', 'Simulation', 'ROS', 'URDF', 'Physics', 'Prototyping'],
    featured: true,
  },
  {
    id: '31',
    slug: 'gazebo',
    name: 'Gazebo',
    url: 'https://gazebosim.org',
  type: 'desktop-app',
    imageUrl: 'https://gazebosim.org/favicon.ico',
    description: 'Industry-standard robot simulator by Open Robotics.',
    longDescription:
      'Gazebo is the industry-standard robot simulator from Open Robotics. Provides accurate physics simulation, 3D environments, sensor models, and tight integration with ROS and ROS 2.',
    category: 'robotics-control',
    purposes: ['simulator'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['linux'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/gazebosim/gz-sim',
    tags: ['ROS', 'Simulation', 'Physics', '3D', 'Sensor Models', 'Garden'],
    featured: true,
  },
  {
    id: '32',
    slug: 'coppeliasim',
    name: 'CoppeliaSim',
    url: 'https://coppeliarobotics.com',
  type: 'desktop-app',
    description: 'Versatile robot simulation platform with multiple physics engines.',
    longDescription:
      'CoppeliaSim (formerly V-REP) is a versatile robot simulation platform supporting multiple physics engines, programming languages, and robot models. Used in education and research for prototyping robotic systems.',
    category: 'robotics-control',
    purposes: ['simulator'],
    pricing: 'freemium',
    authentication: 'signup-required',
    platform: ['windows', 'mac', 'linux'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['Simulation', 'Physics', 'ROS', 'Prototyping', 'Lua', 'Python'],
    featured: false,
  },
  {
    id: '33',
    slug: 'ros-org',
    name: 'ROS.org',
    url: 'https://ros.org',
  type: 'web-app',
    description: 'Official Robot Operating System documentation and ecosystem.',
    longDescription:
      'ROS.org is the official website for the Robot Operating System, providing documentation, tutorials, packages, and community resources for robotics development using ROS and ROS 2.',
    category: 'robotics-control',
    purposes: ['community-docs'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'static-document',
    openSource: true,
    githubUrl: 'https://github.com/ros2',
    tags: ['ROS', 'ROS 2', 'Robotics', 'Official', 'Packages', 'Navigation'],
    featured: true,
  },
  {
    id: '34',
    slug: 'matlab-simulink',
    name: 'MATLAB / Simulink',
    url: 'https://mathworks.com',
  type: 'desktop-app',
    description: 'Numerical computing and model-based design for control systems.',
    longDescription:
      'MATLAB and Simulink from MathWorks are industry standards for numerical computing, algorithm development, and model-based design. Simulink is widely used for control systems, signal processing, and embedded systems simulation.',
    category: 'robotics-control',
    purposes: ['simulator', 'calculator'],
    pricing: 'paid',
    authentication: 'signup-required',
    platform: ['windows', 'mac', 'linux'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['MATLAB', 'Simulink', 'Controls', 'Simulation', 'PID', 'Signal Processing'],
    featured: true,
  },

  // ── Calculators & Technical Reference ───────────────────────────────
  {
    id: '35',
    slug: 'octopart',
    name: 'Octopart',
    url: 'https://octopart.com',
  type: 'web-app',
    description: 'Electronic component search engine with pricing and datasheets.',
    longDescription:
      'Octopart is the most comprehensive search engine for electronic components. Aggregates pricing, availability, and datasheets from hundreds of distributors, making component sourcing fast and transparent.',
    category: 'calculators-reference',
    purposes: ['datasheet-reference'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'input-output-tool',
    openSource: false,
    tags: ['Components', 'Supply Chain', 'Datasheets', 'Pricing', 'Search'],
    featured: true,
  },
  {
    id: '36',
    slug: 'digikey',
    name: 'Digi-Key',
    url: 'https://digikey.com',
  type: 'web-app',
    description: 'Global electronic component distributor with parametric search tools.',
    longDescription:
      'Digi-Key Electronics is a major authorized distributor offering a vast inventory of electronic components with powerful parametric search, reference designs, and engineering resources for rapid prototyping.',
    category: 'calculators-reference',
    purposes: ['datasheet-reference'],
    pricing: 'free',
    authentication: 'no-account',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'input-output-tool',
    openSource: false,
    tags: ['Components', 'Distributor', 'Parametric Search', 'Datasheets', 'Inventory'],
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
  return websites.filter((w) => w.category === categorySlug);
}

export function getOpenSourceWebsites(): Website[] {
  return websites.filter((w) => isToolOpenSource(w));
}

export function searchWebsites(query: string): Website[] {
  const q = query.toLowerCase();
  return websites.filter(
    (w) =>
      w.name.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      w.tags.some((t) => t.toLowerCase().includes(q)) ||
      w.category.replace(/-/g, ' ').includes(q)
  );
}

export function filterWebsites(
  filters: {
    query?: string;
    categories?: string[];
    purposes?: string[];
    pricing?: string[];
    authentication?: string[];
    difficulty?: string[];
    interactivity?: string[];
    openSource?: boolean;
    type?: string[];
  },
  sort: string = 'relevance'
): Website[] {
  let filtered = [...websites];

  if (filters.query) {
    const q = filters.query.toLowerCase();
    filtered = filtered.filter(
      (w) =>
        w.name.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q)) ||
        w.category.replace(/-/g, ' ').includes(q) ||
        w.purposes.some((p) => p.includes(q))
    );
  }

  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter((w) =>
      filters.categories!.includes(w.category)
    );
  }

  if (filters.purposes && filters.purposes.length > 0) {
    filtered = filtered.filter((w) =>
      w.purposes.some((p) => filters.purposes!.includes(p))
    );
  }

  if (filters.pricing && filters.pricing.length > 0) {
    filtered = filtered.filter((w) =>
      filters.pricing!.includes(w.pricing)
    );
  }

  if (filters.authentication && filters.authentication.length > 0) {
    filtered = filtered.filter((w) =>
      filters.authentication!.includes(w.authentication)
    );
  }

  if (filters.difficulty && filters.difficulty.length > 0) {
    filtered = filtered.filter((w) =>
      w.difficulty.some((d) => filters.difficulty!.includes(d))
    );
  }

  if (filters.interactivity && filters.interactivity.length > 0) {
    filtered = filtered.filter((w) =>
      filters.interactivity!.includes(w.interactivity)
    );
  }

  if (filters.openSource) {
    filtered = filtered.filter((w) => isToolOpenSource(w));
  }

  if (filters.type && filters.type.length > 0) {
    filtered = filtered.filter((w) => filters.type!.includes(w.type));
  }

  switch (sort) {
    case 'popular':
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    case 'free-first':
      filtered.sort((a, b) => {
        const order = { free: 0, 'open-source': 0, freemium: 1, paid: 2 };
        return order[a.pricing] - order[b.pricing];
      });
      break;
    case 'open-source-first':
      filtered.sort((a, b) => (isToolOpenSource(b) ? 1 : 0) - (isToolOpenSource(a) ? 1 : 0));
      break;
    default:
      break;
  }

  return filtered;
}
