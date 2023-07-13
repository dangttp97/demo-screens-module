import { useContext } from 'react';
import { Context } from '../provider';

export const useEcoProvider = () => {
  const context = useContext(Context) ?? undefined;

  // if (!context) {
  //   return undefined
  // }
  return context;
};
