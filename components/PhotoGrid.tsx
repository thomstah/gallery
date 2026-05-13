'use client';

import { useState, useEffect, useRef } from 'react';
import { Lightbox } from './Lightbox';
import type { Photo } from '../data/albums';

interface Props { photos: Photo[]; }

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function FadeItem({ photo, index, onClick }: { photo: Photo; index: number; onClick: () => void }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className="masonry-item fade-up"
      style={{ transitionDelay: `${(index % 3) * 60}ms`, cursor: 'zoom-in' }}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        style={{
          width:       '100%',
          display:     'block',
          aspectRatio: photo.orientation === 'portrait' ? '3 / 4' : '4 / 3',
          objectFit:   'cover',
        }}
      />
    </div>
  );
}

export function PhotoGrid({ photos }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <>
      <div className="masonry">
        {photos.map((photo, i) => (
          <FadeItem key={photo.src} photo={photo} index={i} onClick={() => setLightboxIdx(i)} />
        ))}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIdx((i) => Math.min(photos.length - 1, (i ?? 0) + 1))}
        />
      )}
    </>
  );
}
