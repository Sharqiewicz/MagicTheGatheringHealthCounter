import { Text, Button, View } from 'react-native'
import { useState } from 'react'

interface CounterProps {
  defaultValue: number
}

const Counter = ({ defaultValue }: CounterProps = { defaultValue: 20 }) => {
  const [count, setCount] = useState(defaultValue)

  const increment = () => {
    setCount(state => state + 1)
  }

  const decrement = () => {
    setCount(state => state - 1)
  }

  return (
    <View>
      <Text>{count}</Text>
      <Button title="+1" onPress={increment} />
      <Button title="-1" onPress={decrement} />
    </View>
  )
}

export { Counter }
