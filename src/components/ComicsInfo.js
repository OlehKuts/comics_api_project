import { Image } from "react-bootstrap";
import ListGroup  from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"

export const ComicsInfo = ({ selectedComics, hideComicsInfo }) => {
    const {name, thumbnail, description, pageCount, price} = selectedComics;
    return (
        <>
        <div className="comicsInfo">
             <p className='comicsInfoImage'>
            <Image src={thumbnail} alt='comics'rounded fluid></Image>
            </p>
            <div> 
                <Card className="text-center">
            <Card.Header >{name}</Card.Header>
            <p>{description.length ? description: null}</p>
                <ListGroup variant="flush">
                    <ListGroup.Item >Pages: {pageCount}</ListGroup.Item>
                    <ListGroup.Item variant="dark">Price: {price}$</ListGroup.Item>
            </ListGroup>
            <Card.Footer><div><button onClick={hideComicsInfo} className='btn btn-outline-success'>
                Back to list</button></div></Card.Footer>
            </Card>
            </div>
        </div>
        </>
    )
}