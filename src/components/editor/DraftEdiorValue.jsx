import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, Modifier, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const DraftEdiorValue = ({ defaultText, setEmailTXT }) => {
  const [editorState, setEditorState] = useState(() => {
    // Initialize editor state with default text
    if (defaultText) {
      const contentState = ContentState.createFromText(defaultText);
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  });
  useEffect(()=>{
setEditorState(() => {
    // Initialize editor state with default text
    if (defaultText) {
      const contentState = ContentState.createFromText(defaultText);
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  })
  },[defaultText])

  useEffect(() => {
    // Update email text whenever editor state changes
    const html = convertToHtml(editorState);
    // setEmailTXT(html);
  }, [editorState]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const convertToHtml = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    return draftToHtml(rawContentState);
  };

  const applyInlineStyle = (style) => {
    setEditorState((prevState) => {
      const selection = prevState.getSelection();
      const contentState = Modifier.applyInlineStyle(
        prevState.getCurrentContent(),
        selection,
        style
      );
      return EditorState.push(prevState, contentState, 'change-inline-style');
    });
  };

  return (
    <div className='border rounded-sm shadow-md mb-8'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'fontSize', 'list', 'textAlign', 'link', 'emoji', 'remove', 'history'],
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
              onChange: (fontSize) => applyInlineStyle('14px'),
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
      <div className="preview hidden" dangerouslySetInnerHTML={{ __html: convertToHtml(editorState) }} />
    </div>
  );
};

export default DraftEdiorValue;
