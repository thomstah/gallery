'use client';

import { useState } from 'react';
import { Lightbox } from './Lightbox';
import type { Photo } from '../data/albums';

interface Props { photos: Photo[]; }

export function PhotoGrid({ photos }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <>
      <div className="masonry">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="masonry-item"
            onClick={() => setLightboxIdx(i)}
            style={{ cursor: 'zoom-in' }}
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
