import Pagination from 'react-bootstrap/Pagination';


const PaginationContainer = ({count, currentPage, setCurrentPage}) => {
    const totalPages = Math.ceil(count / process.env.REACT_APP_LIMIT);
 
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return(
        <Pagination>
            <Pagination.First 
                disabled={ currentPage === 1 }
                onClick={() => setCurrentPage(1)}/>

                {pageNumbers.map((number,key) => (
                    <Pagination.Item key={key}
                        onClick={() => handlePageChange(number)}
                        active={number === currentPage}>{number}</Pagination.Item>
                ))}

            <Pagination.Last
                disabled={ currentPage === pageNumbers.length} 
                onClick={() => setCurrentPage(pageNumbers.length)}/>
        </Pagination>
    )
}

export default PaginationContainer