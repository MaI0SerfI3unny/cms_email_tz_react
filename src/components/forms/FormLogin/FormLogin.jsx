import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const formFields = [
    { label: "Нікнейм", name: "username", type: "text", placeholder: "Enter nickname" },
    { label: "Пароль", name: "password", type: "password", placeholder: "Enter password" },
];


const FormLogin = ({ funcClick,formValues,setFormValues }) => {
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
                </Form.Group>))}
            <Button variant="success" onClick={funcClick}>
            Логін
            </Button>
        </Form>
    )
}

export default FormLogin