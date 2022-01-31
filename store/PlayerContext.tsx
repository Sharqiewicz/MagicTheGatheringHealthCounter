import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'
import { IPlayer } from '../types'

interface IPlayerContext {
  players: IPlayer[]
  update: Dispatch<SetStateAction<IPlayer[]>>
}

const PlayerContext = createContext<IPlayerContext | undefined>(undefined)

export const PlayerProvider: React.FC = ({ children }) => {
  const [players, update] = useState<IPlayer[]>([])

  const value = { players, update }
  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error('Component is beyond PlayerContext')
  }

  return context
}
