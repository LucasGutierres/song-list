// @flow
import type { HeaderState } from './type';

function getMedia(str: string): string {
  switch (str){
    default:
      return str='all';
    case 'Música':
      return str='song';
    case 'Álbum':
      return str='album'
    case 'Artista':
      return str='musicArtist'
  }
}

export const getApiUrl = ({
  media,
  query
}: HeaderState) => `https://itunes.apple.com/search?media=music&term=${query.split(' ').join('+')}&entity=${getMedia(media)}`;