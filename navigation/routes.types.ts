import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  AddPlayer: undefined
  Battle: undefined
}

export type RootStackScreenProps<StackScreenList extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, StackScreenList>

export enum RootStackScreenName {
  AddPlayer = 'AddPlayer',
  Battle = 'Battle',
}
