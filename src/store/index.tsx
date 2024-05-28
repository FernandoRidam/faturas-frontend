import {
  ReactNode,
  createContext,
  useContext,
} from 'react';

import { useLoading } from './hooks/loading';

export interface UseContext {
  loading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
};

export interface DefaultComponentProps {
  children: ReactNode;
};

export interface StateProviderProps extends DefaultComponentProps {};

export const store = createContext<UseContext>({
  loading: false,
  openLoading: () => {},
  closeLoading: () => {},
});

const { Provider } = store;

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const loading = useLoading();

  return (
    <Provider
      value={{
        ...loading,
      }}
    >{children}</Provider>
  );
};

export const useStore = () => useContext( store );
