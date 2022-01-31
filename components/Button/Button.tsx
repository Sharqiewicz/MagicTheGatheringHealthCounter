import React from 'react'
import { Text, Pressable } from 'react-native'
import { styles } from './Button.styles'

interface IButtonProps {
  onPress: () => void
  title: string
  style?: CSSStyleSheet
}

export const Button = ({ onPress, title }: IButtonProps) => {
  return (
    <Pressable style={[styles.button]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
