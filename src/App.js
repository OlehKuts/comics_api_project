import { useEffect, useState } from 'react';
import useComicsService from './services/useComicsService';
import { RandomHero } from './components/RandomHero';
import { getRandomNum, scrollToTop } from './utils/utils';
import { Navbar } from './Bootstrap_components/Navbar';
import { HeroList } from './components/HeroList';
import { ComicsList } from './components/ComicsList';
import { initHero, initComics } from './constants';

export const App = () => {
  const [pagesVisibility, setPagesVisibility] = useState([{id: 0, isVisible: true},
    {id: 1, isVisible: false}, {id: 2, isVisible: false}
  ])
  // variables
  const [randomHero, setRandomHero] = useState(initHero);
  const [selectedHero, setSelectedHero] = useState(initHero);
  const [selectedComics, setSelectedComics] = useState(initComics)
  const [isInfoOpened, setIsInfoOpened] = useState(false);
  const [isComicsInfoOpened, setIsComicsInfoOpened] = useState(false);
  const [randomHeroes, setRandomHeroes] = useState([]);
  const [randomComics, setRandomComics] = useState([]);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showMoreComicsBtn, setShowMoreComicsBtn] = useState(true);
  const {getAllCharacters, getCharacter, getAllComics, error, loading} = useComicsService()
  // fns
 
  const changePage = (pageId) => setPagesVisibility([...pagesVisibility]
    .map(item => item.id === pageId ? {...item, isVisible: true} : {...item, isVisible: false}))
  const chooseHero = (heroId) => {
    setIsInfoOpened(true);
    setSelectedHero([...randomHeroes].find(item => item.id === heroId));
    scrollToTop()
  }
    const chooseComics = (comicsId) => {
    setIsComicsInfoOpened(true);
    setSelectedComics([...randomComics].find(item => item.id === comicsId));
    scrollToTop()
  }
    const hideComicsInfo = () => setIsComicsInfoOpened(false);
  const updateHero = () => {
  getCharacter(getRandomNum(20))
  .then((data) => {
    setRandomHero(data);
  })}
  const getRandomHeroes = () => {
  getAllCharacters()
  .then((data) => {
    setRandomHeroes([...data].sort(() => Math.random() - 0.5).splice(0,9));
  }) }
  const getRandomComics = () => {
  getAllComics()
  .then((data) => {
    setRandomComics([...data].sort(() => Math.random() - 0.5).splice(0,8));
  }) }

 const uploadAdditionalHeroes= () => {
  getAllCharacters()
  .then((data) => {
    const additionalHeroes = [...data].filter(item => !randomHeroes.some(rndHero => rndHero.id === item.id))
    .sort(() => Math.random() - 0.5).splice(0, 9);
    setRandomHeroes([...randomHeroes, ...additionalHeroes]);
    if(additionalHeroes.length < 9) setShowMoreBtn(false);
  }) }
  const uploadAdditionalComics = () => {
    getAllComics()
    .then((data) => {
    const additionalComics = [...data].filter(item => !randomComics.some(rndHero => rndHero.id === item.id))
    .sort(() => Math.random() - 0.5).splice(0, 8);
    setRandomComics([...randomComics, ...additionalComics]);
    if(additionalComics.length < 8) setShowMoreComicsBtn(false);
  })
  }
    useEffect(() => {updateHero()}, []);
    useEffect(() => {getRandomHeroes()}, []);
    useEffect(() => {getRandomComics()}, [])

  return (
    <div className="App">
     <Navbar changePage={changePage} pageList={pagesVisibility}/>
    {pagesVisibility[0].isVisible ? <RandomHero hero={randomHero} loading={loading} err={error} 
     updateHero={updateHero}/> : null}
  {pagesVisibility[1].isVisible ? 
  <HeroList randomHeroes={randomHeroes} selectedHero={selectedHero} 
  isInfoOpened={isInfoOpened} chooseHero={chooseHero} uploadAdditionalHeroes={uploadAdditionalHeroes}
  showMoreBtn={showMoreBtn}/>
   : null}
   {pagesVisibility[2].isVisible ? <ComicsList
    randomComics={randomComics}  uploadAdditionalComics={uploadAdditionalComics}
     showMoreComicsBtn={showMoreComicsBtn} isComicsInfoOpened={isComicsInfoOpened}
     chooseComics={chooseComics} selectedComics={selectedComics} hideComicsInfo={hideComicsInfo}/> : null}
    </div>
  );
}
;
