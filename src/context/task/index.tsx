import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';

import { loadState, saveState } from 'src/utilities';

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

const localData = loadState('tasks') || initialState;

export const TaskContext = createContext<{
  state: TaskListProps;
  dispatch: Dispatch<IDispatch>;
}>({
  state: localData,
  dispatch: () => null,
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<any>(taskReducer, localData);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  saveState(state, 'tasks');

  return (
    <TaskContext.Provider value={value as never}>
      {children}
    </TaskContext.Provider>
  );
};
