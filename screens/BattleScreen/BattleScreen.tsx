import { ScrollView } from 'react-native'

import { IPlayer } from '../../types'
import { usePlayer } from '../../store'
import { PlayerReducerActions } from '../../store/PlayersReducer'
import { RootStackScreenProps, RootStackScreenName } from '../../navigation/routes.types'

import { Counter } from '../../components/Counter'

import { Button } from '../../components/Button'

import { styles } from './BattleScreen.styles'

export const BattleScreen = ({ navigation }: RootStackScreenProps<'Battle'>) => {
  const { state, dispatch } = usePlayer()

  const increment = (player: IPlayer) => {
    const payload = { name: player.name, health: player.health + 1 }
    dispatch({ type: PlayerReducerActions.UPDATE_HEALTH, payload })
  }

  const decrement = (player: IPlayer) => {
    const payload = { name: player.name, health: player.health - 1 }
    dispatch({ type: PlayerReducerActions.UPDATE_HEALTH, payload })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {state.players.map(player => (
        <Counter player={player} increment={increment} decrement={decrement} />
      ))}

      <Button
        title="END GAME"
        onPress={() => {
          dispatch({ type: PlayerReducerActions.RESET })
          navigation.navigate(RootStackScreenName.AddPlayer)
        }}
      />
    </ScrollView>
  )
}
