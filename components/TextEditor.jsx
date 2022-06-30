import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({body,childToParent}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
 

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }


    
  return (
    <div>

        <Editor 
        editorState={editorState}
        editorClassName="bg-[white] p-4 h-[50rem] "
        onEditorStateChange={onEditorStateChange}
        onInput={(e) => {
            childToParent(e.target.value)
        }
        }
        />
    </div>
  )
}

export default TextEditor