import Button from 'react-bootstrap/Button';
import profile from "../../assets/profile.png"
import { Link } from 'react-router-dom';

const Profile = ({deleteLogin,dataAuth}) => {
    return(
        <div>
            <h2>Вітаємо: {dataAuth.username}</h2>
            <div>
            <img className='avatar' src={profile} alt=""/>  
            </div>
            <Link to="/email/current/create">
                <Button variant="success">
                    Надіслати лист
                </Button>
            </Link>   
            <Button variant="danger" onClick={deleteLogin}>
                Вийти з системи
            </Button>      
        </div>
    )
}

export default Profile