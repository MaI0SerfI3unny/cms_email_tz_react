import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const formFields = [
    { label: "Вигадайте нікнейм", name: "username", type: "text", placeholder: "Enter nickname" },
    { label: "Впишіть електрону пошту", name: "email", type: "email", placeholder: "Enter email" },
    { label: "Вигадайте Пароль", name: "password", type: "password", placeholder: "Enter password" },
];

const FormRegister = ({ funcClick,formValues,setFormValues }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    return(
        <Form>
             {formFields.map((field, index) => (
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                            type={field.type}
                            name={field.name}
                            value={formValues[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                        />
                    </Form.Group>
                ))}

            <Button onClick={funcClick} variant="success">
                Зареєструватись
            </Button>
        </Form>
    )
}

export default FormRegister