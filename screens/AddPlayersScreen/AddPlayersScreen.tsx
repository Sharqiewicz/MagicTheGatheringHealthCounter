import { View } from 'react-native'
import { useState } from 'react'

import { usePlayer } from '../../store/'
import { RootStackScreenProps, RootStackScreenName } from '../../navigation/routes.types'

import { PlayerReducerActions } from '../../store/PlayersReducer'

import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { styles } from './AddPlayersScreen.styles'

export const AddPlayersScreen = ({ navigation }: RootStackScreenProps<'AddPlayer'>) => {
  const [player, setPlayer] = useState<string>('')
  const [health, setHealth] = useState<string>('20')
  const { state, dispatch } = usePlayer()

  const addPlayer = () => {
    if (player.length) {
      const payload = { name: player, health: Number(health) }
      dispatch({ type: PlayerReducerActions.ADD_PLAYER, payload })
      setPlayer('')
      setHealth('20')
    }
  }

  const submit = () => {
    if (player.length) {
      addPlayer()
    }
    navigation.navigate(RootStackScreenName.Battle)
  }

  const formState = { player, setPlayer, health, setHealth }

  return (
    <View style={styles.container}>
      <Form {...formState} />
      <View style={styles.buttonsContainer}>
        <Button title="ADD PLAYER" onPress={addPlayer} />
        <Button title="DONE" onPress={submit} />
      </View>
    </View>
  )
}
