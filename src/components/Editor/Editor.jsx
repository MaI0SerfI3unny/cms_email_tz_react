import { Editor, EditorState, Modifier } from 'draft-js';


const btnSett = [
    { name: "H1", text: "<h1>text</h1>" },
    { name: "H2", text: "<h2>text</h2>" },
    { name: "H3", text: "<h3>text</h3>" },
    { name: "Bold", text: "<strong>Bold text</strong>" },
    { name: "Italic", text: "<em>Italic text</em>" },
    { name: "Underline", text: "<u>Underlined text</u>" },
]

const EditorView = ({editorState, setEditorState}) => {

    const handleEditorChange = (state) => {
        setEditorState(state);
    };

    const handleInsertHtml = (html) => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'HTML',
            'MUTABLE',
            { html }
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newContentState = Modifier.replaceText(
            contentState,
            editorState.getSelection(),
            html,
            null,
            entityKey
        );
        const newEditorState = EditorState.push(
            editorState,
            newContentState,
            'insert-fragment'
        );
        setEditorState(newEditorState);
    };

    return(
        <>
            <div>
                {btnSett.map((el, key) => 
                    <button key={key} type="button" onClick={() => handleInsertHtml(el.text)}>
                    {el.name}
                    </button>)}
            </div>
            <div className='editor_container'>
                <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                    placeholder="Write something here..."
                    spellCheck={true}
                />
            </div>
        </>
    )
}

export default EditorView