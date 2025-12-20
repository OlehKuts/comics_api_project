import Button from "react-bootstrap/Button";
import { ComicsItem } from "./ComicsItem";

export const ComicsList = ({randomComics,  uploadAdditionalComics, showMoreComicsBtn,
     chooseComics, selectedComics}) => {
    return (
        <>
             <div className="comicsListContainer">
        <div className="comicsList">
            {randomComics.length  ? randomComics.map((item, idx) => 
            <ComicsItem key={item.id || idx} randomComics={item} chooseComics={chooseComics} 
            selectedComics={selectedComics}/>) : null}
        </div>
        </div>
        <div className="showMoreComics">
            {showMoreComicsBtn ? <Button onClick={uploadAdditionalComics}>
                More comics
            </Button> : null}
        </div>
        </>
    )
}