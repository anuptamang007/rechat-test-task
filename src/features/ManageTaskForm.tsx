import React from 'react';

type TProps = {
  action: string;
};

export const ManageTaskForm = ({ action }: TProps) => {
  return <div>ManageTaskForm {action || 'add'}</div>;
};
