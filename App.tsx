import { PlayerProvider } from './store/PlayerContext'

import { StyleSheet, View } from 'react-native'
import { Counter } from './components/Counter'

export default function App() {
  return (
    <PlayerProvider>
      <View style={styles.container}>
        <Counter defaultValue={20} />
        <Counter defaultValue={20} />
      </View>
    </PlayerProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
