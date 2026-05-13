import Link from 'next/link';
import { albums } from '../data/albums';
import { AlbumCard } from '../components/AlbumCard';
import { colors, fontSizes } from '../lib/tokens';

export default function Home() {
  return (
    <main style={{ padding: '48px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <Link
          href="https://thommyxay.com"
          style={{
            fontFamily:    'var(--font-pixel)',
            fontSize:      fontSizes.label,
            letterSpacing: '0.12em',
            color:         colors.textMuted,
            textDecoration: 'none',
            display:       'inline-block',
            marginBottom:  '20px',
          }}
        >
          ← HUB
        </Link>
        <h1
          style={{
            fontFamily:    'var(--font-pixel)',
            fontSize:      fontSizes.heading,
            fontWeight:    700,
            color:         colors.text,
            letterSpacing: '0.05em',
          }}
        >
          GALLERY
        </h1>
      </header>

      {albums.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: fontSizes.label, color: colors.textMuted, letterSpacing: '0.1em' }}>
          Coming soon.
        </p>
      ) : (
        <div className="masonry">
          {albums.map((album) => (
            <AlbumCard key={album.slug} album={album} />
          ))}
        </div>
      )}
    </main>
  );
}
