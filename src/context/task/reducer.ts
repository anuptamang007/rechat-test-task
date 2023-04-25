import { TaskActions, TaskListProps, Types } from './types';

export default function taskReducer(state: TaskListProps, action: TaskActions) {
  switch (action.type) {
    case Types.GetAllTask: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GetAllTaskSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case Types.GetAllTaskFailed: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case Types.CreateTask: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.CreateTaskSuccess: {
      return {
        ...state,
        loading: false,
        createdData: action.payload,
      };
    }
    case Types.CreateTaskFailed: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case Types.GetTaskById: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GetTaskByIdSuccess: {
      return {
        ...state,
        loading: false,
        singleData: action.payload,
      };
    }
    case Types.GetTaskByIdFailed: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case Types.EditTaskById: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.EditTaskByIdSuccess: {
      return {
        ...state,
        loading: false,
        editedData: action.payload,
      };
    }
    case Types.EditTaskByIdFailed: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
