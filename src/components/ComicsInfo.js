import { Image } from "react-bootstrap";
import ListGroup  from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"
import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom-v5-compat";
import { comicsContext } from "../context";

export const ComicsInfo = () => {
    const {selectedComics, chooseComics} = useContext(comicsContext);
    const {name, thumbnail, description, pageCount, price} = selectedComics;
    const navigate = useNavigate();
    const {comicsId} = useParams();
    useEffect(() => {
        if(Number(comicsId) < 21 && Number(comicsId) > 0) {
            chooseComics(comicsId)
        }
        else {navigate("*")}
    }, [comicsId])
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
            <Card.Footer><div><button onClick={() => navigate(-1)} className='btn btn-outline-success'>
                Back to list</button></div></Card.Footer>
            </Card>
            </div>
        </div>
        </>
    )
}