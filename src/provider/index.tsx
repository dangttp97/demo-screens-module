import { NavigationContainerRefWithCurrent } from '@react-navigation/native'
import React, { PropsWithChildren } from 'react'
import { ECOModuleScreens } from '../declaration'

type ECOProviderProps = {
  navigationRef?: NavigationContainerRefWithCurrent<ECOModuleScreens>
}

export const Context = React.createContext<ECOProviderProps>(null!)

export const ECOProvider = ({
  ...props
}: PropsWithChildren<ECOProviderProps>) => {
  const { children, ...rest } = props

  return <Context.Provider value={{ ...rest }}>{children}</Context.Provider>
}
