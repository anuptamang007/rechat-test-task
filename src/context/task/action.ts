import {
  createTaskApi,
  editTaskByIdApi,
  getAllTaskApi,
  getTaskByIdApi,
} from '../api/posts';

import { IDispatch, Task, Types } from './types';

export const readAllTask = (dispatch: (arg: IDispatch) => void) => {
  dispatch({ type: Types.GetAllTask });

  try {
    const response = getAllTaskApi();

    dispatch({
      type: Types.GetAllTaskSuccess,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: Types.GetAllTaskFailed,
      payload: error,
    });
  }
};

export const readTaskById = (
  dispatch: (arg: IDispatch) => void,
  id: string
) => {
  dispatch({ type: Types.GetTaskById });

  try {
    const response = getTaskByIdApi(id);
    dispatch({
      type: Types.GetTaskByIdSuccess,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: Types.GetTaskByIdFailed,
      payload: error,
    });
  }
};

export const createTask = (dispatch: (arg: IDispatch) => void, task: Task) => {
  dispatch({ type: Types.CreateTask });

  try {
    const response = createTaskApi(task);

    dispatch({
      type: Types.CreateTaskSuccess,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: Types.CreateTaskFailed,
      payload: error,
    });
  }
};

export const editTask = (dispatch: (arg: IDispatch) => void, task: Task) => {
  dispatch({ type: Types.EditTaskById });

  try {
    const response = editTaskByIdApi(task);

    dispatch({
      type: Types.EditTaskByIdSuccess,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: Types.EditTaskByIdFailed,
      payload: error,
    });
  }
};

export const resetCreatePost = (dispatch: (arg: IDispatch) => void) => {
  dispatch({ type: Types.ResetCreatePost });
};

export const resetEditPost = (dispatch: (arg: IDispatch) => void) => {
  dispatch({ type: Types.ResetEditPost });
};
