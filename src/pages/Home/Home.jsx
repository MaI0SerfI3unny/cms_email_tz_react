import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListEmail from '../../components/ListEmail/ListEmail';
import Profile from '../../components/Profile/Profile';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumbs';
import { getEmail } from '../../axios/axiosEmail';

const Home = ({setIsAuthenticated,dataAuth}) => {
    const [emails,setEmails] = useState([{count: 0, results: [], previous: null, next: null }])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const {data} = await getEmail({username: dataAuth.username, password: dataAuth.password, offset: currentPage })
                setEmails(data)
            }catch(e){}
        }
        fetchData()
    },[currentPage])

    const deleteLogin = async () => {
            localStorage.removeItem('cms_data');
            setIsAuthenticated(false)
    }

    return(
      <Container>
        <Breadcrumb arrLink={[
            { name: "Головна", link: "/email/current/" }
        ]} />
        <Profile 
            dataAuth={dataAuth}
            deleteLogin={deleteLogin}/>
        <ListEmail 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={emails}/>
      </Container>
    )
  }

export default Home