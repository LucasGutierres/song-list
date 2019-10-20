// @flow
export type ContainerState = {
  status: 'init' | 'loading' | 'noContent' | 'error' | '',
  data?: Object
};

export type SearchOption = 'Song' | 'Album' | 'musicArtist';

export type HeaderState = {
  media: SearchOption,
  query: string
};

export type SearchResult = {
  artistId: number,
  collectionId: number,
  artworkUrl100: string,
  artistName?: string,
  trackName?: string,
  collectionName?: string,
};
