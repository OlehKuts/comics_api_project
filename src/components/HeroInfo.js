import { Image } from "react-bootstrap";
import ListGroup  from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"

export const HeroInfo = ({isOpened, selectedHero}) => {
    const {name, thumbnail, description, homepage, wiki, comics} = selectedHero;
    return (
        <>
        {isOpened ? <div className="heroInfo">
             <p className='heroInfoImage'>
            <Image src={thumbnail} alt='hero'rounded fluid></Image>
            </p>
        <p>{name}</p>
        <p>{description.length ? description: null}</p>
        <div className='heroFooter'>
            <div><a href={homepage} className='btn btn-outline-primary' rel="noreferrer" target="_blank">Homepage</a></div>
            <div><a href={wiki} className='btn btn-outline-success' rel="noreferrer" target="_blank">Wiki</a></div>
            </div>
            <hr />
            <div className="comicsList"> 
                <Card className="text-center">
            <Card.Header >Comics</Card.Header>
                <ListGroup variant="flush">{comics.length ? <>
                {comics.map(item => 
                    <ListGroup.Item variant="dark" key={item}>{item}</ListGroup.Item>
                )}
            </> : <ListGroup.Item>No related comics found!</ListGroup.Item>}
            </ListGroup>
            </Card>
             
            </div>
        </div> : null}
        </>
    )
}