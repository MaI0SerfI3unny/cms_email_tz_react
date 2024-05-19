import EditorView from '../../Editor/Editor';
import { Form, Button } from 'react-bootstrap';

const FormCreateEmail = ({funcClick,editorState,setEditorState,formValues,setFormValues}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    const formFields = [
        { label: "Відправник", name: "email", type: "text", placeholder: "Відправник...", value: true },
        { label: "Отримувач", name: "recipient", type: "email", placeholder: "Отримувач..." },
        { label: "Тема тексту", name: "subject", type: "text", placeholder: "Тема тексту..." },
    ]

    return(
        <Form>
            {formFields.map((field, index) => (
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                            type={field.type}
                            name={field.name}
                            disabled={field.value}
                            value={formValues[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                        />
                    </Form.Group>
            ))}

            <EditorView 
                editorState={editorState} 
                setEditorState={setEditorState} />

            <Button onClick={funcClick} variant="success">
                Надіслати лист
            </Button>
        </Form> 
    )
}

export default FormCreateEmail