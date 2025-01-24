import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

export const searchTextAtom = atom('');

interface MyRate {
  movieId: number;
  starButtonIndex: number;
}

export const myRateListAtom = atomWithStorage<MyRate[] | null>('myRateList', null);
