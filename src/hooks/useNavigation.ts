import { NavigationProp, NavigationContext } from '@react-navigation/native'
import React from 'react'
import { ECOModuleScreens } from '../declaration'

/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
export function useNavigation<T extends NavigationProp<ECOModuleScreens>>(): T {
  const navigation = React.useContext(NavigationContext)

  if (navigation === undefined) {
    throw new Error(
      "Couldn't find a navigation object. Is your component inside a screen in a navigator?"
    )
  }

  return navigation as unknown as T
}
