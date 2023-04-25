import { Task } from '../task/types';

export const getAllTaskApi = async () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const getTaskByIdApi = async (id: string) => {
  const tasks = localStorage.getItem('tasks');
  return tasks
    ? (JSON.parse(tasks).find((task: Task) => task.id === id) as Task)
    : ({} as Task);
};

export const createTaskApi = async (task: Task) => {
  const tasks = localStorage.getItem('tasks') || '[]';
  const data = {
    title: task.title,
    description: task.description,
    status: task.status,
  };
  const newTask = {
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().getTime(),
    ...data,
    history: [
      {
        id: Math.random().toString(36).substr(2, 9),
        task: data,
        updatedAt: new Date().getTime(),
      },
    ],
  };
  const newTasks = [...JSON.parse(tasks), newTask];
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return newTask as Task;
};

export const editTaskByIdApi = async (task: Task) => {
  const tasks = localStorage.getItem('tasks') || '[]';

  const newTasks = JSON.parse(tasks).map((item: Task) => {
    if (item.id === task.id) {
      const history = [
        { ...item.history },
        {
          id: Math.random().toString(36).substr(2, 9),
          task: {
            title: task.title,
            description: task.description,
            status: task.status,
          },
          updatedAt: new Date().getTime(),
        },
      ];
      return {
        ...item,
        title: task.title,
        description: task.description,
        status: task.status,
        history,
      };
    }
    return item;
  });

  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return task as Task;
};
