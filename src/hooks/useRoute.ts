/**
 * Hook to access the route prop of the parent screen anywhere.
 *
 * @returns Route prop of the parent screen.
 */
import { RouteProp } from '@react-navigation/native';
import { useRoute as RNUseRoute } from '@react-navigation/native';
import { AppScreens } from '../declar';

export const useRoute = <T extends keyof AppScreens>(): RouteProp<
  AppScreens,
  T
> => {
  return RNUseRoute<RouteProp<AppScreens, T>>();
};
