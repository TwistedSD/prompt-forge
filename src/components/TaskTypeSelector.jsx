import React from "react";
import { taskTypes } from "../promptTemplates";

export default function TaskTypeSelector({ taskType, setTaskType }) {
  return (
    <div>
      <label>Task Type:</label>
      <select value={taskType} onChange={e => setTaskType(e.target.value)}>
        {taskTypes.map(t => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    </div>
  );
}