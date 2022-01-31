import { createContext, useContext, useReducer, Dispatch } from 'react'

import { playerReducer, IPlayerReducerState, IPlayerReducerPayload } from './PlayersReducer'

interface IPlayerContext {
  state: IPlayerReducerState
  dispatch: Dispatch<IPlayerReducerPayload>
}

const PlayerContext = createContext<IPlayerContext | undefined>(undefined)

export const PlayerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, { players: [] })

  const value = { state, dispatch }
  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error('Component is beyond PlayerContext')
  }

  return context
}
