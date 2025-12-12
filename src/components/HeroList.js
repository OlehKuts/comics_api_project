import { HeroInfo } from "./HeroInfo"
import { HeroItem } from "./HeroItem";
import Button from "react-bootstrap/Button";

export const HeroList = ({randomHeroes, isInfoOpened, selectedHero, chooseHero, 
    uploadAdditionalHeroes, showMoreBtn
}) => {
    return (
        <>
        <div className="heroListContainer">
        <div className="heroList">
            {randomHeroes.length  ? randomHeroes.map((item, idx) => 
            <HeroItem key={item.id || idx} randomHero={item} chooseHero={chooseHero}
            selectedHero={selectedHero}/>) : null}
        </div>
        <HeroInfo selectedHero={selectedHero} isOpened={isInfoOpened} />
        </div>
        <div className="showMoreHeroes">
            {showMoreBtn ? <Button onClick={uploadAdditionalHeroes}>
                More heroes
            </Button> : null}
        </div>
        </>
    )
}