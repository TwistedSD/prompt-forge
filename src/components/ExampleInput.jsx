import React from "react";

export default function ExampleInput({ example, setExample }) {
  return (
    <div>
      <label>Example Input:</label>
      <textarea
        rows={3}
        value={example}
        onChange={e => setExample(e.target.value)}
        placeholder="Enter example data for the prompt (optional)"
      />
    </div>
  );
}