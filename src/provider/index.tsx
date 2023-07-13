import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';

export type AppProviderType = {
  navigationRef?: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
  onReady?: () => void;
};

export const Context = React.createContext<AppProviderType>(null!);

export const ECOProvider = ({
  ...props
}: PropsWithChildren<AppProviderType>) => {
  return (
    <Context.Provider value={{ ...props }}>{props.children}</Context.Provider>
  );
};
