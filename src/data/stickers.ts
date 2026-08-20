export type StickerEntry = {
  id: string;
  src: string;
  alt: string;
  position: string;
  size: string;
  rotation: string;
  opacity: string;
  animation: string;
  blur?: string;
};

export const heroStickers: StickerEntry[] = [
  {
    id: 'main-logo',
    src: '/stickers/image.png',
    alt: 'EngineeringHunt',
    position: 'absolute -top-6 -left-10 md:block',
    size: 'w-20 h-20 md:w-28 md:h-28',
    rotation: '-rotate-12',
    opacity: 'opacity-[0.18]',
    animation: 'animate-sticker-float',
  },
  {
    id: 'circuit-top-right',
    src: '/stickers/circuit.png',
    alt: '',
    position: 'absolute -right-8 top-[12%] md:block',
    size: 'w-16 h-16 md:w-24 md:h-24',
    rotation: 'rotate-6',
    opacity: 'opacity-[0.15]',
    animation: 'animate-sticker-sway',
  },
  {
    id: 'chip-bottom-left',
    src: '/stickers/chip.png',
    alt: '',
    position: 'absolute bottom-[8%] left-[5%] md:block',
    size: 'w-14 h-14 md:w-20 md:h-20',
    rotation: 'rotate-45',
    opacity: 'opacity-[0.20]',
    animation: 'animate-sticker-drift',
  },
  {
    id: 'waveform-right',
    src: '/stickers/waveform.png',
    alt: '',
    position: 'absolute right-[8%] bottom-[15%] md:block',
    size: 'w-18 h-12 md:w-28 md:h-16',
    rotation: '-rotate-6',
    opacity: 'opacity-[0.12]',
    animation: 'animate-sticker-float',
    blur: 'blur-[0.5px]',
  },
  {
    id: 'resistor-top-mid',
    src: '/stickers/resistor.png',
    alt: '',
    position: 'absolute -top-4 right-[30%] md:block',
    size: 'w-14 h-10 md:w-22 md:h-14',
    rotation: 'rotate-12',
    opacity: 'opacity-[0.10]',
    animation: 'animate-sticker-sway',
    blur: 'blur-[0.3px]',
  },
];

export const exploreStickers: StickerEntry[] = [
  {
    id: 'explore-main',
    src: '/stickers/image.png',
    alt: '',
    position: 'absolute -top-8 -right-6 md:block',
    size: 'w-16 h-16 md:w-22 md:h-22',
    rotation: 'rotate-12',
    opacity: 'opacity-[0.12]',
    animation: 'animate-sticker-drift',
  },
  {
    id: 'explore-circuit',
    src: '/stickers/circuit.png',
    alt: '',
    position: 'absolute -left-6 bottom-[20%] md:block',
    size: 'w-14 h-14 md:w-18 md:h-18',
    rotation: '-rotate-6',
    opacity: 'opacity-[0.10]',
    animation: 'animate-sticker-float',
  },
];
