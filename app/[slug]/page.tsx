import { notFound } from 'next/navigation';
import Link from 'next/link';
import { albums } from '../../data/albums';
import { PhotoGrid } from '../../components/PhotoGrid';
import { colors, fontSizes } from '../../lib/tokens';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  if (!album) notFound();

  return (
    <main style={{ padding: '48px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <Link
          href="/"
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
          ← GALLERY
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
          {album.title.toUpperCase()}
        </h1>
        {album.description && (
          <p
            style={{
              fontFamily:    'var(--font-pixel)',
              fontSize:      fontSizes.label,
              color:         colors.textMuted,
              letterSpacing: '0.08em',
              marginTop:     '8px',
            }}
          >
            {album.description}
          </p>
        )}
      </header>

      {album.photos.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: fontSizes.label, color: colors.textMuted, letterSpacing: '0.1em' }}>
          Coming soon.
        </p>
      ) : (
        <PhotoGrid photos={album.photos} />
      )}
    </main>
  );
}
