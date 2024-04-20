import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const LiveEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <h2>Live Editor</h2>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
      />
      <h2>Preview</h2>
      <div className="preview" dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
};

export default LiveEditor;
