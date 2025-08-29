import React from "react";
import { templates } from "../promptTemplates";

export default function TemplateEditor({ model, taskType, customTemplate, setCustomTemplate }) {
  const defaultTemplate = templates[model][taskType];

  return (
    <div>
      <label>Prompt Template:</label>
      <textarea
        rows={3}
        value={customTemplate !== undefined ? customTemplate : defaultTemplate}
        onChange={e => setCustomTemplate(e.target.value)}
      />
    </div>
  );
}
