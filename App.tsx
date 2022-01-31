import { PlayerProvider } from './store/PlayerContext'
import { Navigation } from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <PlayerProvider>
        <Navigation />
      </PlayerProvider>
    </SafeAreaProvider>
  )
}
