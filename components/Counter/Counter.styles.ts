import { StyleSheet } from 'react-native'

export const useStyles = (isLow: boolean = false) => {
  return StyleSheet.create({
    container: {
      margin: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,

      shadowColor: '#171717',
      shadowRadius: 25,
      elevation: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    heading: {
      width: 140,
      fontSize: 20,
      color: isLow ? '#c23616' : '#44bd32',
      fontWeight: 'bold',
    },
  })
}
