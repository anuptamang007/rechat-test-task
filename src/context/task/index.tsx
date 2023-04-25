import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';

import taskReducer from './reducer';
import { IDispatch, TaskListProps } from './types';

export const initialState: TaskListProps = {
  loading: false,
  data: [],
  singleData: null,
  editedData: null,
  createdData: null,
  error: null,
};

export const TaskContext = createContext<{
  state: TaskListProps;
  dispatch: Dispatch<IDispatch>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<any>(taskReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <TaskContext.Provider value={value as never}>
      {children}
    </TaskContext.Provider>
  );
};
