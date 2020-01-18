export type GameState = 'WON' | 'LOST' | 'NEW' | 'IN_PROCESS';

export class Game {
  static newGame(minesLeft: number): Game {
    return {
      state: 'NEW',
      minesLeft,
    }
  }

  constructor(
    public state: GameState,
    public minesLeft: number
  ) { }
}