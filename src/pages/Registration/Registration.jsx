import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { axiosRegister } from '../../axios/axiosRegistration';
import FormRegister from '../../components/forms/FormRegister/FormRegister';

const Registration = ({setIsAuthenticated}) => {
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: ""
    });

    const createRegistration = async () => {
        try{
            const {data, status} = await axiosRegister(formValues)
            if(status === 200){
                localStorage.setItem('cms_data', JSON.stringify(data));
                setIsAuthenticated(true)
            }
        }catch(e){}
    }
    return(
        <Container>
        <div className='form_container'>
          <div className='form_req'>
            <p className='form_req_title'>Реєстрація</p>

            <FormRegister
                formValues={formValues} 
                setFormValues={setFormValues}
                funcClick={createRegistration}
                />

            <div className='form_req_link_container'>
                <Link to="/">Логін</Link>
            </div>
          </div>
        </div>
      </Container>
    )
}

export default Registration