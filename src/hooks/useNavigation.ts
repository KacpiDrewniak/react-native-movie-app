import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<RootStackParamList>>();

export type RootStackParamList = {
  [Screens.HomeScreen]: undefined;
  [Screens.VideoScreen]: {id: string};
};

export enum Screens {
  HomeScreen = 'HomeScreen',
  VideoScreen = 'VideoScreen',
}
