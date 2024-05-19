import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { axiosLogin } from '../../axios/axiosLogin';
import FormLogin from '../../components/forms/FormLogin/FormLogin';

const Login = ({setIsAuthenticated}) => {
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    });

    const createLogin = async () => {
        try{
            let {data, status} = await axiosLogin(formValues)
            if(status === 200){
                data.password = formValues.password
                localStorage.setItem('cms_data', JSON.stringify(data));
                setIsAuthenticated(true) 
            }
        }catch(e){}
    }

    return(
      <Container>
        <div className='form_container'>
          <div className='form_req'>
            <p className='form_req_title'>Логін</p>

            <FormLogin
                formValues={formValues}
                setFormValues={setFormValues}
                funcClick={createLogin}/>

            <div className='form_req_link_container'>
                <Link to="/registration">Реєстрація</Link>
            </div>
          </div>
        </div>
      </Container>
    )
  }

export default Login