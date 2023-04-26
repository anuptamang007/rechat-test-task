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

export interface TaskHistory {
  id: string;
  task: Task;
  updatedAt: number;
}

export interface Task {
  id?: string;
  title: string;
  description: string;
  status: string;
  createdAt?: number;
  lastUpdated?: number;
  history?: TaskHistory[] | any;
}

export interface TaskListProps {
  data: Task[];
  singleData: Task | null | undefined;
  editedData: Task | null | undefined;
  createdData: Task | null | undefined;
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
  EditTaskById = 'EDIT_TASK_BY_ID',
  EditTaskByIdSuccess = 'EDIT_TASK_BY_ID_SUCCESS',
  EditTaskByIdFailed = 'EDIT_TASK_BY_ID_FAILED',
  CreateTask = 'CREATE_TASK',
  CreateTaskSuccess = 'CREATE_TASK_SUCCESS',
  CreateTaskFailed = 'CREATE_TASK_FAILED',
  ResetCreatePost = 'RESET_CREATE_POST',
  ResetEditPost = 'RESET_EDIT_POST',
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
    id: string | undefined;
    data: Task;
  };
  [Types.EditTaskByIdFailed]: {
    error: object | null | string;
  };
  [Types.ResetCreatePost]: {
    createdData: null;
  };
  [Types.ResetEditPost]: {
    editedData: null;
  };
};

export type TaskActions =
  ActionMap<TasksPayload>[keyof ActionMap<TasksPayload>];
