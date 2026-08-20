import type { StickerEntry } from '@/data/stickers';

interface FloatingStickersProps {
  stickers: StickerEntry[];
  className?: string;
}

export function FloatingStickers({ stickers, className = '' }: FloatingStickersProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stickers.map((sticker) => (
        <img
          key={sticker.id}
          src={sticker.src}
          alt={sticker.alt}
          loading="lazy"
          draggable={false}
          className={`absolute select-none ${sticker.hideOnMobile ? 'hidden md:block' : ''} ${sticker.position} ${sticker.size} ${sticker.rotation} ${sticker.opacity} ${sticker.animation} ${sticker.blur || ''}`}
        />
      ))}
    </div>
  );
}
