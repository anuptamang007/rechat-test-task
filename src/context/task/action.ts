import {
  createTaskApi,
  editTaskByIdApi,
  getAllTaskApi,
  getTaskByIdApi,
} from '../api/posts';

import { IDispatch, Task, Types } from './types';

export const readAllTask = async (dispatch: (arg: IDispatch) => void) => {
  dispatch({ type: Types.GetAllTask });

  try {
    const response = await getAllTaskApi();

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

export const readTaskById = async (
  dispatch: (arg: IDispatch) => void,
  id: string
) => {
  dispatch({ type: Types.GetTaskById });

  try {
    const response = await getTaskByIdApi(id);
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

export const createTask = async (
  dispatch: (arg: IDispatch) => void,
  task: Task
) => {
  dispatch({ type: Types.CreateTask });

  try {
    const response = await createTaskApi(task);

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

export const editTask = async (
  dispatch: (arg: IDispatch) => void,
  task: Task
) => {
  dispatch({ type: Types.EditTaskById });

  try {
    const response = await editTaskByIdApi(task);

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
