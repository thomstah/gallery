'use client';

import { useEffect } from 'react';
import { colors } from '../lib/tokens';
import type { Photo } from '../data/albums';

interface Props {
  photos:   Photo[];
  index:    number;
  onClose:  () => void;
  onPrev:   () => void;
  onNext:   () => void;
}

export function Lightbox({ photos, index, onClose, onPrev, onNext }: Props) {
  const photo = photos[index];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          200,
        backgroundColor: 'rgba(0,0,0,0.93)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
      }}
      onClick={onClose}
    >
      {/* prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          style={navBtn('left')}
        >
          ‹
        </button>
      )}

      <img
        src={photo.src}
        alt={photo.alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth:   '90vw',
          maxHeight:  '88vh',
          objectFit:  'contain',
          display:    'block',
        }}
      />

      {/* next */}
      {index < photos.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          style={navBtn('right')}
        >
          ›
        </button>
      )}

      {/* close */}
      <button
        onClick={onClose}
        style={{
          position:   'absolute',
          top:        '20px',
          right:      '24px',
          background: 'none',
          border:     'none',
          color:      colors.textMuted,
          fontSize:   '28px',
          cursor:     'pointer',
          lineHeight: 1,
        }}
      >
        ✕
      </button>

      {/* counter */}
      <p
        style={{
          position:    'absolute',
          bottom:      '20px',
          left:        '50%',
          transform:   'translateX(-50%)',
          fontFamily:  'var(--font-pixel)',
          fontSize:    '10px',
          letterSpacing: '0.1em',
          color:       colors.textMuted,
        }}
      >
        {index + 1} / {photos.length}
      </p>
    </div>
  );
}

function navBtn(side: 'left' | 'right'): React.CSSProperties {
  return {
    position:        'absolute',
    [side]:          '16px',
    top:             '50%',
    transform:       'translateY(-50%)',
    background:      'none',
    border:          'none',
    color:           '#e2e2e2',
    fontSize:        '48px',
    cursor:          'pointer',
    lineHeight:      1,
    padding:         '0 8px',
    userSelect:      'none',
  };
}
