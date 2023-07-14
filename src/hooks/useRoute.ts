/**
 * Hook to access the route prop of the parent screen anywhere.
 *
 * @returns Route prop of the parent screen.
 */

import { RouteProp } from '@react-navigation/native'
import { useRoute as RNUseRoute } from '@react-navigation/native'
import { ECOModuleScreens } from '../declaration'

export const useRoute = <T extends keyof ECOModuleScreens>(): RouteProp<
  ECOModuleScreens,
  T
> => {
  return RNUseRoute<RouteProp<ECOModuleScreens, T>>()
}
