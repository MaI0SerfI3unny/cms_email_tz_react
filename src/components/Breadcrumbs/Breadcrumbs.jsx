import Breadcrumb from "react-bootstrap/Breadcrumb"

const Breadcrumbs = ({ arrLink }) => {
    
    return(
        <Breadcrumb aria-label="breadcrumb">
            {arrLink && arrLink.map((el, key) => 
                <Breadcrumb.Item 
                    key={key} 
                    underline="hover" 
                    color="inherit" 
                    href={el.link}>
                    {el.name}
                </Breadcrumb.Item>)}
        </Breadcrumb>
    )
}

export default Breadcrumbs