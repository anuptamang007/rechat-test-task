import { loadState } from 'src/utilities';

import { initialState } from '../task';
import { Task, TaskHistory } from '../task/types';

export const getAllTaskApi = () => {
  const tasks = loadState('tasks') || initialState;
  return tasks.data as Task[];
};

export const getTaskByIdApi = (id: string) => {
  const tasks = loadState('tasks') || initialState;
  const task = tasks.data.find((item: Task) => item.id === id);

  return task as Task;
};

export const createTaskApi = (task: Task) => {
  const data = {
    title: task.title,
    description: task.description,
    status: task.status,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().getTime(),
  };
  const newTask: Task = {
    ...data,
    lastUpdated: data.createdAt,
    history: [
      {
        id: Math.random().toString(36).substr(2, 9),
        task: data,
        updatedAt: new Date().getTime(),
      },
    ] as TaskHistory[],
  };
  return newTask as Task;
};

export const editTaskByIdApi = (task: Task) => {
  const data = {
    title: task.title,
    description: task.description,
    status: task.status,
    id: task.id,
    createdAt: task.createdAt,
    lastUpdated: new Date().getTime(),
  };

  const newTask: Task = {
    ...data,
    history: [
      ...task.history,
      {
        id: Math.random().toString(36).substr(2, 9),
        updatedAt: new Date().getTime(),
        task: data,
      },
    ] as TaskHistory[],
  };

  return newTask as Task;
};
