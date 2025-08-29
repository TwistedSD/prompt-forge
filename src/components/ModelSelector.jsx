import React from "react";
import { models } from "../promptTemplates";

export default function ModelSelector({ model, setModel }) {
  return (
    <div>
      <label>Model:</label>
      <select value={model} onChange={e => setModel(e.target.value)}>
        {models.map(m => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
    </div>
  );
}