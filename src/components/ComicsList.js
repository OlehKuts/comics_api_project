import Button from "react-bootstrap/Button";
import { ComicsItem } from "./ComicsItem";
import { ComicsInfo } from "./ComicsInfo";

export const ComicsList = ({randomComics,  uploadAdditionalComics, showMoreComicsBtn,
     chooseComics, isComicsInfoOpened, selectedComics, hideComicsInfo}) => {
    return (
        <>
        {!isComicsInfoOpened ? <>
             <div className="comicsListContainer">
        <div className="comicsList">
            {randomComics.length  ? randomComics.map((item, idx) => 
            <ComicsItem key={item.id || idx} randomComics={item} chooseComics={chooseComics} 
            isComicsInfoOpened={isComicsInfoOpened} selectedComics={selectedComics}/>) : null}
        </div>
        </div>
        <div className="showMoreComics">
            {showMoreComicsBtn ? <Button onClick={uploadAdditionalComics}>
                More comics
            </Button> : null}
        </div>
        </> : <ComicsInfo selectedComics={selectedComics} hideComicsInfo={hideComicsInfo}/>}
        </>
    )
}