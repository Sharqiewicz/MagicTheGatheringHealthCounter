import { IPlayer } from '../types'

export enum PlayerReducerActions {
  ADD_PLAYER = 'ADD_PLAYER',
  UPDATE_HEALTH = 'UPDATE_HEALTH',
  RESET = 'RESET',
}
export interface IPlayerReducerState {
  players: IPlayer[]
}

export type IPlayerReducerPayload =
  | { type: PlayerReducerActions.ADD_PLAYER; payload: { health: number; name: string } }
  | { type: PlayerReducerActions.UPDATE_HEALTH; payload: { health: number; name: string } }
  | { type: PlayerReducerActions.RESET }

export const playerReducer = (
  state: IPlayerReducerState,
  action: IPlayerReducerPayload
): IPlayerReducerState => {
  switch (action.type) {
    case PlayerReducerActions.ADD_PLAYER: {
      const { name, health } = action.payload
      return {
        players: [...state.players, { name, health }],
      }
    }
    case PlayerReducerActions.UPDATE_HEALTH: {
      const { name, health } = action.payload

      return {
        players: state.players.map(player => (player.name === name ? { name, health } : player)),
      }
    }
    case PlayerReducerActions.RESET: {
      return {
        players: [],
      }
    }
  }
}
