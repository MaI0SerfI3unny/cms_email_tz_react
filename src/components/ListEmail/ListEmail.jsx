import Table from 'react-bootstrap/Table';
import PaginationContainer from '../Pagination/Pagination';


const ListEmail = ({data,currentPage, setCurrentPage}) => {
    return(
        <div className='list_email_container'>
            <h3>Список листів</h3>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Recipient</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.results?.map((el, key) => 
                        <tr key={key}>
                            <td>{el.id}</td>
                            <td>{el.recipient}</td>
                            <td>{el.subject}</td>
                        </tr>)}
                </tbody>
            </Table>
            <PaginationContainer
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                count={data.count}/>
        </div>
    )
}

export default ListEmail