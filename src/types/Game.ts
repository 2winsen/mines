import { Size } from './Size';

export interface Game {
  lost: boolean;
  won: boolean;
  minesLeft: number;
}