import { View, Text } from 'react-native'
import { IPlayer } from '../../types'

import { Button } from '../Button'

import { useStyles } from './Counter.styles'
interface CounterProps {
  player: IPlayer
  increment: (player: IPlayer) => void
  decrement: (player: IPlayer) => void
}

const Counter = ({ player, increment, decrement }: CounterProps) => {
  const isLow = () => player.health < 8
  const styles = useStyles(isLow())
  return (
    <View style={styles.container}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.heading}>
        {player.name + ': ' + player.health}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="+1" onPress={() => increment(player)} />
        <Button title="-1" onPress={() => decrement(player)} />
      </View>
    </View>
  )
}

export { Counter }
