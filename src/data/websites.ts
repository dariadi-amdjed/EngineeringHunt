import type { Website } from '@/types';
import { isToolOpenSource } from '@/types';
import { rankWebsites } from '@/lib/search';

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
    openSource: false,
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
    githubUrl: 'https://github.com/pfalstad/circuitjs1',
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
    description: 'In-browser schematic editor and mixed-mode circuit simulator with waveform plotting.',
    longDescription:
      'CircuitLab pairs a browser schematic editor with its own mixed-mode simulation engine — AC sweeps, Bode plots, time-domain analysis — and exports presentation-quality schematics. Its interactive Ultimate Electronics textbook doubles as a solid intro to circuit design.',
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
      "All About Circuits hosts a free online textbook, worked worksheets, and active forums covering electronics from Ohm's law through semiconductors, digital logic, and power electronics. The forums alone are worth a bookmark for troubleshooting help.",
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
    slug: 'eep-web-tools',
    name: 'EEP - Electrical Engineering Portal',
    url: 'https://electrical-engineering-portal.com',
    type: 'web-app',
    description: 'Technical articles, guides, and downloadable calculation spreadsheets for power engineers.',
    longDescription:
      'EEP publishes deep LV/MV/HV technical articles on switchgear, protection relaying, transformers, and substation design, plus a download center full of engineering spreadsheets for cable sizing, voltage drop, and fault calculations. Much of the archive is free; premium membership unlocks specialized guides and video courses.',
    category: 'electrical-power',
    purposes: ['community-docs', 'calculator'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'static-document',
    openSource: false,
    tags: ['Power Systems', 'Technical Articles', 'Spreadsheets', 'Switchgear', 'Protection'],
    featured: true,
  },
  {
    id: '7',
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
    id: '8',
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
    id: '9',
    slug: 'arduino',
    name: 'Arduino',
    url: 'https://arduino.cc',
    type: 'web-app',
    description: 'Official Arduino documentation, project hub and community.',
    longDescription:
      "Home base for all things Arduino: IDE downloads, board documentation, the Project Hub's thousands of community builds, and forums where most beginner questions get answered within hours. The IDE and board cores are developed in the open on the arduino GitHub org.",
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
    id: '10',
    slug: 'esp-idf',
    name: 'ESP-IDF Documentation',
    url: 'https://docs.espressif.com/projects/esp-idf',
    type: 'web-app',
    description: 'Official Espressif IoT Development Framework documentation.',
    longDescription:
      'ESP-IDF is the official development framework for ESP32 and other Espressif chips. The documentation provides comprehensive guides for building IoT applications with Wi-Fi, Bluetooth, and many other peripherals.',
    category: 'embedded-systems-iot',
    purposes: ['community-docs'],
    pricing: 'open-source',
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
    id: '11',
    slug: 'platformio',
    name: 'PlatformIO',
    url: 'https://platformio.org',
    type: 'desktop-app',
    description: 'Professional embedded development ecosystem and IDE.',
    longDescription:
      "PlatformIO is two things that replace vendor IDEs: PlatformIO Core, a Python-based CLI build system, and a VS Code extension wrapping it. One project configuration builds for any of 1,000+ supported boards (ESP32, STM32, AVR, RP2040...), with dependency management through its central library registry.",
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
    id: '12',
    slug: 'adafruit',
    name: 'Adafruit',
    url: 'https://adafruit.com',
    type: 'web-app',
    description: 'Electronics vendor with one of the deepest free maker tutorial libraries.',
    longDescription:
      "Adafruit designs and sells dev boards, sensors, and components, and backs them with an enormous free learning system covering Arduino, CircuitPython (which started there), sensors, and wearables. The tutorials are product-agnostic enough to be useful even if you buy nothing.",
    category: 'embedded-systems-iot',
    purposes: ['community-docs'],
    pricing: 'freemium',
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'static-document',
    openSource: false,
    tags: ['Hardware', 'Sensors', 'CircuitPython', 'Maker', 'Tutorials'],
    featured: true,
  },
  {
    id: '13',
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
    id: '14',
    slug: 'easyeda',
    name: 'EasyEDA',
    url: 'https://easyeda.com',
    type: 'web-app',
    description: 'Browser-based EDA suite with schematic, PCB layout and LCSC component library.',
    longDescription:
      'EasyEDA bundles schematic capture, PCB layout, and Ngspice-based simulation in the browser, wired directly into the LCSC parts catalog and one-click JLCPCB fabrication. The Standard and newer Pro editors are both free; a paid tier adds private libraries, more cloud storage, and support.',
    category: 'pcb-design-eda',
    purposes: ['eda-tool'],
    pricing: 'freemium',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['PCB', 'Schematic', 'LCSC', 'JLCPCB', 'Online EDA', 'Gerber'],
    featured: true,
  },
  {
    id: '15',
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
    id: '16',
    slug: 'flux',
    name: 'Flux',
    url: 'https://flux.ai',
    type: 'web-app',
    description: 'Browser-based PCB design tool with an AI copilot for schematics and layout.',
    longDescription:
      'Flux runs the full PCB design flow in the browser — schematic capture, board layout, and a 3D viewer — with an AI copilot that can place components, wire up reference designs, and answer design questions as you work. Boards share like documents, so reviewing a teammate\'s layout is just a link.',
    category: 'pcb-design-eda',
    purposes: ['eda-tool'],
    pricing: 'freemium',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: ['PCB', 'AI Copilot', 'Schematic', 'Layout', 'Browser', '3D Viewer'],
    featured: false,
  },
  {
    id: '17',
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
    id: '18',
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
    id: '19',
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
    id: '20',
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
    authentication: 'optional-signup',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/TinyTapeout',
    tags: ['ASIC', 'Digital Design', 'Gate Level', 'Chip', 'Education', 'Silicon'],
    featured: true,
  },
  {
    id: '21',
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
    platform: ['linux', 'mac', 'windows'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'input-output-tool',
    openSource: true,
    githubUrl: 'https://github.com/steveicarus/iverilog',
    tags: ['Verilog', 'Simulation', 'HDL', 'Open Source', 'CLI'],
    featured: false,
  },
  {
    id: '22',
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
    platform: ['linux', 'mac', 'windows'],
    difficulty: ['advanced'],
    interactivity: 'input-output-tool',
    openSource: true,
    githubUrl: 'https://github.com/YosysHQ/yosys',
    tags: ['Synthesis', 'FPGA', 'Open Source', 'Formal Verification', 'ASIC'],
    featured: false,
  },
  {
    id: '23',
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
  {
    id: '24',
    slug: 'enginaut',
    name: 'Enginaut',
    url: 'https://enginaut.app',
    type: 'web-app',
    description: 'Gamified learning platform with short daily lessons for engineering concepts.',
    longDescription:
      'Enginaut is an interactive educational platform that uses gamification to simplify complex engineering concepts through short, engaging daily lessons — described by its community as the "Duolingo of engineering". Users pick an engineering specialization and follow structured learning paths of increasing difficulty, combining visual lessons, interactive challenges such as drag-and-drop activities, and problem-solving exercises. Free to use; an account is required to save progress and track achievements.',
    category: 'digital-logic-hdl',
    purposes: ['community-docs'],
    pricing: 'free',
    authentication: 'signup-required',
    platform: ['web'],
    difficulty: ['beginner', 'intermediate'],
    interactivity: 'interactive-canvas',
    openSource: false,
    tags: [
      'Education',
      'Gamification',
      'Digital Logic',
      'Computer Architecture',
      'Electronics',
      'Embedded Systems',
    ],
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
      'Compiler Explorer lets you write C, C++, Rust, Assembly, and other languages and see the resulting compiler output in real time. Essential for understanding code generation, optimization, and low-level behavior — pick any compiler version or target triple and diff the assembly side by side.',
    category: 'computer-architecture-chips',
    purposes: ['simulator'],
    pricing: 'open-source',
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
    url: 'https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html',
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
    description: 'Industry-standard robot simulator, the default 3D engine behind ROS.',
    longDescription:
      "Gazebo is the simulator generations of robotics researchers cut their teeth on: physics engines, sensor and terrain models, and first-class ROS 2 integration. Originally from Open Robotics (now community-governed under the Open Source Robotics Foundation), current releases run on Linux, Windows, and macOS.",
    category: 'robotics-control',
    purposes: ['simulator'],
    pricing: 'open-source',
    authentication: 'no-account',
    platform: ['linux', 'windows', 'mac'],
    difficulty: ['intermediate', 'advanced'],
    interactivity: 'interactive-canvas',
    openSource: true,
    githubUrl: 'https://github.com/gazebosim/gz-sim',
    tags: ['ROS 2', 'Simulation', 'Physics', '3D', 'Sensor Models', 'SDF'],
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
    pricing: 'open-source',
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
    name: 'DigiKey',
    url: 'https://digikey.com',
    type: 'web-app',
    description: 'Global electronic component distributor with parametric search tools.',
    longDescription:
      'DigiKey (formerly Digi-Key) is a major authorized distributor offering a vast in-stock inventory of electronic components with powerful parametric search, datasheets, reference designs, and free engineering calculators for rapid prototyping.',
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
  return rankWebsites(query, websites).map((r) => r.website);
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

  if (filters.query && filters.query.trim()) {
    filtered = rankWebsites(filters.query, filtered).map((r) => r.website);
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
