import { Image } from "react-bootstrap";
import { Link } from "react-router-dom-v5-compat";

export const ComicsItem = ({randomComics, chooseComics, selectedComics}) => {
    const {name, thumbnail, id} = randomComics;
    return (
        <>
        <div className={`comicsItem ${selectedComics.id === id ? "selectedComics" : ""}`} onClick={() => chooseComics(id)}>
             <p className='randomHeroImage'>
            <Image src={thumbnail} alt='comics'rounded fluid></Image>
            </p>
        <Link to={`/comics/${id}`}>{name}</Link>
        </div>
        </>
    )
}