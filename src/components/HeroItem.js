import { Image } from "react-bootstrap";

export const HeroItem = ({randomHero, chooseHero, selectedHero}) => {
    const {name, thumbnail, id} = randomHero;
    return (
        <>
        <div className={`heroItem ${selectedHero.id === id ? "selectedHero" : ""}`} 
        onClick={() => chooseHero(id)}>
             <p className='randomHeroImage'>
            <Image src={thumbnail} alt='hero'rounded fluid></Image>
            </p>
        <p>{name}</p>
        </div>
        </>
    )
}