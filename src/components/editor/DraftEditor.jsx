import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, Modifier } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const DraftEditor = ({ setEmailTXT }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const html = convertToHtml(newEditorState);
    setEmailTXT(html);
  };

  const convertToHtml = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const html = draftToHtml(rawContentState);
    return html;
  };

  const applyInlineStyle = (style) => {
    setEditorState((prevState) => {
      const selection = prevState.getSelection();
      const contentState = Modifier.applyInlineStyle(prevState.getCurrentContent(), selection, style);
      return EditorState.push(prevState, contentState, 'change-inline-style');
    });
  };

  return (
    <div>
      
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline','fontSize', 'list', 'textAlign', 'link', 'emoji', 'remove', 'history'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
            // Add the fontSize and color options with custom styling
            fontSize: {
              icon: 'fontSize',
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: [12, 14],
              // Apply inline style for fontSize
              onChange: (fontSize) => applyInlineStyle(  '14px' ),
            },
            color: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              colors: ['#585858'],
              // Apply inline style for color
              onChange: (color) => applyInlineStyle('#585858'),
            },
          },
        }}
      />
      
      <div className="preview hidden"  dangerouslySetInnerHTML={{ __html: convertToHtml(editorState) }} />
    </div>
  );
};

export default DraftEditor;
