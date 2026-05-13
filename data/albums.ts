export type Orientation = 'landscape' | 'portrait';

export interface Photo {
  src: string;
  alt: string;
  orientation: Orientation;
}

export interface Album {
  slug: string;
  title: string;
  description?: string;
  cover: string;
  coverOrientation: Orientation;
  photos: Photo[];
}

export const albums: Album[] = [
  // Add albums here as you import photos.
  // Example:
  // {
  //   slug: 'japan-2024',
  //   title: 'Japan 2024',
  //   description: 'Two weeks across Tokyo, Kyoto, and Osaka.',
  //   cover: '/photos/japan-2024/cover.jpg',
  //   coverOrientation: 'landscape',
  //   photos: [
  //     { src: '/photos/japan-2024/01.jpg', alt: 'Shibuya crossing at night', orientation: 'landscape' },
  //     { src: '/photos/japan-2024/02.jpg', alt: 'Temple gate', orientation: 'portrait' },
  //   ],
  // },
];
