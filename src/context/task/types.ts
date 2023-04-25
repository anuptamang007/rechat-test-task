export interface IDispatch {
  type: string;
  payload?: string[] | [] | object[] | boolean | number | unknown;
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

interface TaskHistory {
  id: string;
  task: Task;
  updatedAt: string | number;
}

export interface Task {
  id?: string;
  title: string;
  description: string;
  status: string;
  history?: TaskHistory[] | [];
}

export interface TaskListProps {
  data: Task[];
  singleData: Task | null;
  editedData: Task | null;
  createdData: Task | null;
  error: object | null | string;
  loading: boolean;
}

export enum Types {
  GetAllTask = 'GET_ALL_TASK',
  GetAllTaskSuccess = 'GET_ALL_TASK_SUCCESS',
  GetAllTaskFailed = 'GET_ALL_TASK_FAILED',
  GetTaskById = 'GET_TASK_BY_ID',
  GetTaskByIdSuccess = 'GET_TASK_BY_ID_SUCCESS',
  GetTaskByIdFailed = 'GET_TASK_BY_ID_FAILED',
  EditTaskById = 'GET_TASK_BY_ID',
  EditTaskByIdSuccess = 'GET_TASK_BY_ID_SUCCESS',
  EditTaskByIdFailed = 'GET_TASK_BY_ID_FAILED',
  CreateTask = 'CREATE_TASK',
  CreateTaskSuccess = 'CREATE_TASK_SUCCESS',
  CreateTaskFailed = 'CREATE_TASK_FAILED',
}

export type TasksPayload = {
  [Types.GetAllTask]: {
    loading: boolean;
  };
  [Types.GetAllTaskSuccess]: {
    data: Task[];
    error: object | null | string;
    loading: boolean;
  };
  [Types.GetAllTaskFailed]: {
    error: object | null | string;
  };
  [Types.GetTaskById]: {
    loading: boolean;
  };
  [Types.GetTaskByIdSuccess]: {
    data: Task;
  };
  [Types.GetTaskByIdFailed]: {
    error: object | null | string;
  };
  [Types.CreateTask]: {
    loading: boolean;
  };
  [Types.CreateTaskSuccess]: {
    data: Task;
  };
  [Types.CreateTaskFailed]: {
    error: object | null | string;
  };
  [Types.EditTaskById]: {
    loading: boolean;
  };
  [Types.EditTaskByIdSuccess]: {
    data: Task;
  };
  [Types.EditTaskByIdFailed]: {
    error: object | null | string;
  };
};

export type TaskActions =
  ActionMap<TasksPayload>[keyof ActionMap<TasksPayload>];
