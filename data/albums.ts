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
  {
    slug: '26-LNY',
    title: 'Lao New Year 2026',
    description: 'Lao New Year Parade',
    cover: '/photos/26-LNY/02.jpg',
    coverOrientation: 'landscape',
    photos: [
      { src: '/photos/26-LNY/01.jpg', alt: 'Lao New Year Parade', orientation: 'portrait' },
      { src: '/photos/26-LNY/02.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/03.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/04.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/05.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/06.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/07.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/08.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/09.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/10.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/11.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/12.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/13.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/14.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/15.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/16.jpg', alt: 'Lao New Year Parade', orientation: 'portrait' },
      { src: '/photos/26-LNY/17.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/18.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/19.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/20.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/21.jpg', alt: 'Lao New Year Parade', orientation: 'portrait' },
      { src: '/photos/26-LNY/22.jpg', alt: 'Lao New Year Parade', orientation: 'portrait' },
      { src: '/photos/26-LNY/23.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/24.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/25.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/26.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/27.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/28.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/29.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/30.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
      { src: '/photos/26-LNY/31.jpg', alt: 'Lao New Year Parade', orientation: 'landscape' },
    ],
  },
];
