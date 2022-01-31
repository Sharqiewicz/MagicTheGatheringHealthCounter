import { View, TextInput, Text } from 'react-native'
import { Dispatch, SetStateAction } from 'react'

import { styles } from './Form.styles'

interface FormFieldProps {
  player: string
  setPlayer: Dispatch<SetStateAction<string>>
  placeholder?: string
  health: string
  setHealth: Dispatch<SetStateAction<string>>
}

const Form: React.FC<FormFieldProps> = ({
  player,
  setPlayer,
  placeholder = 'Type username...',
  health,
  setHealth,
}) => {
  return (
    <View>
      <Text style={styles.label}>Player name</Text>
      <TextInput
        style={styles.textInput}
        value={player}
        onChangeText={setPlayer}
        placeholder={placeholder}
      />
      <Text style={styles.label}>Player health</Text>
      <TextInput
        style={styles.textInput}
        value={health}
        onChangeText={setHealth}
        defaultValue="0"
        keyboardType="numeric"
      />
    </View>
  )
}

export { Form }
