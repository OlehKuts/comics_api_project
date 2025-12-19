import { Image } from "react-bootstrap";

export const ComicsItem = ({randomComics, chooseComics, selectedComics}) => {
    const {name, thumbnail, id} = randomComics;
    return (
        <>
        <div className={`comicsItem ${selectedComics.id === id ? "selectedComics" : ""}`} onClick={() => chooseComics(id)}>
             <p className='randomHeroImage'>
            <Image src={thumbnail} alt='comics'rounded fluid></Image>
            </p>
        <p>{name}</p>
        </div>
        </>
    )
}