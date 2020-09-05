import {
  OmdbSearchData,
  OmdbSearchQuery,
} from '../../../../../../../interfaces';

export const mockSearchResponse: OmdbSearchData[] = [
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    imdbId: 'tt0120737',
    type: 'movie',
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    imdbId: 'tt0167260',
    type: 'movie',
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: '2002',
    imdbId: 'tt0167261',
    type: 'movie',
  },
  {
    title: 'The Lord of the Rings',
    year: '1978',
    imdbId: 'tt0077869',
    type: 'movie',
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: '2002',
    imdbId: 'tt0347436',
    type: 'game',
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    imdbId: 'tt0387360',
    type: 'game',
  },
  {
    title: 'The Lord of the Rings: The Battle for Middle-Earth II',
    year: '2006',
    imdbId: 'tt0760172',
    type: 'game',
  },
  {
    title: 'The Lord of the Rings: The Battle for Middle-Earth',
    year: '2004',
    imdbId: 'tt0412935',
    type: 'game',
  },
  {
    title:
      'The Lord of the Rings: The Battle for Middle-earth II - The Rise of the Witch-king',
    year: '2006',
    imdbId: 'tt1058040',
    type: 'game',
  },
  {
    title: 'The Lord of the Rings: The Third Age',
    year: '2004',
    imdbId: 'tt0415947',
    type: 'game',
  },
];

export const mockSearchQuery: OmdbSearchQuery = {
  s: 'Lord of the rings',
};
