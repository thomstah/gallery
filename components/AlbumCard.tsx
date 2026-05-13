'use client';

import { useState } from 'react';
import Link from 'next/link';
import { colors, fontSizes } from '../lib/tokens';
import type { Album } from '../data/albums';

interface Props { album: Album; }

export function AlbumCard({ album }: Props) {
  const [hovered, setHovered] = useState(false);
  const isPortrait = album.coverOrientation === 'portrait';

  return (
    <div className="masonry-item">
      <Link href={`/${album.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position:     'relative',
            overflow:     'hidden',
            cursor:       'pointer',
            aspectRatio:  isPortrait ? '3 / 4' : '4 / 3',
          }}
        >
          <img
            src={album.cover}
            alt={album.title}
            style={{
              width:      '100%',
              height:     '100%',
              objectFit:  'cover',
              display:    'block',
              transform:  hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 400ms ease',
            }}
          />
          {/* overlay */}
          <div
            style={{
              position:   'absolute',
              inset:      0,
              background: hovered
                ? 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)'
                : 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
              transition: 'background 300ms ease',
            }}
          />
          <div
            style={{
              position:   'absolute',
              bottom:     0,
              left:       0,
              right:      0,
              padding:    '16px 14px',
            }}
          >
            <p
              style={{
                fontFamily:    'var(--font-pixel)',
                fontSize:      fontSizes.label,
                fontWeight:    700,
                letterSpacing: '0.12em',
                color:         colors.text,
              }}
            >
              {album.title}
            </p>
            {album.description && (
              <p
                style={{
                  fontFamily:  'var(--font-pixel)',
                  fontSize:    '9px',
                  color:       colors.textMuted,
                  marginTop:   '4px',
                  letterSpacing: '0.05em',
                  opacity:     hovered ? 1 : 0,
                  transition:  'opacity 250ms ease',
                }}
              >
                {album.description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
