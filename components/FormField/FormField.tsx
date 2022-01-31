import { Text, View, TextInput } from 'react-native'
import { useState } from 'react'

interface FormFieldProps {}

const FormField = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <TextInput value={name} onChangeText={setName} placeholder="Type username..." />
    </View>
  )
}

export { FormField }
