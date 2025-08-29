import React from "react";

export default function PromptPreview({ template, example }) {
  const preview = `${template}\n\n${example ? example : ""}`;

  return (
    <div>
      <label>Prompt Preview:</label>
      <pre>{preview}</pre>
      <button
        onClick={() => {
          navigator.clipboard.writeText(preview);
          alert("Prompt copied to clipboard!");
        }}
      >
        Copy to Clipboard
      </button>
    </div>
  );
}
