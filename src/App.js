import { useEffect, useState } from 'react';
import useComicsService from './services/useComicsService';
import { RandomHero } from './components/RandomHero';
import { getRandomNum, scrollToTop } from './utils/utils';
import { HeroList } from './components/HeroList';
import { ComicsList } from './components/ComicsList';
import { initHero, initComics } from './constants';
import { HashRouter as Router, Route, Routes } from 'react-router-dom-v5-compat';
import { AppHeader } from './components/AppHeader';
import { NoMatch } from './components/NoMatch';
import { ComicsInfo } from './components/ComicsInfo';
import { comicsContext } from './context';

export const App = () => {
      const chooseComics = (comicsId) => {
    getComics(comicsId).then(data => setComicsInfoData({...comicsInfoData, selectedComics: data}))
  }
  // variables
  const [randomHero, setRandomHero] = useState(initHero);
  const [selectedHero, setSelectedHero] = useState(initHero);
  const [comicsInfoData, setComicsInfoData] = useState({selectedComics: initComics, chooseComics})
  const [isInfoOpened, setIsInfoOpened] = useState(false);
  const [randomHeroes, setRandomHeroes] = useState([]);
  const [randomComics, setRandomComics] = useState([]);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showMoreComicsBtn, setShowMoreComicsBtn] = useState(true);
  const {getAllCharacters, getCharacter, getAllComics, getComics, error, loading} = useComicsService();
  const {Provider} = comicsContext;
  // fns
  const chooseHero = (heroId) => {
    setIsInfoOpened(true);
    setSelectedHero([...randomHeroes].find(item => item.id === heroId));
    scrollToTop()
  }
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
    <Provider value={comicsInfoData}> 
    <Router>
    <div className="App">
      <AppHeader />
        <Routes>
 <Route path="/" element={<RandomHero hero={randomHero} loading={loading} err={error} 
     updateHero={updateHero}/>}/>
     <Route path="/heroes" element={<HeroList randomHeroes={randomHeroes} selectedHero={selectedHero} 
  isInfoOpened={isInfoOpened} chooseHero={chooseHero} uploadAdditionalHeroes={uploadAdditionalHeroes}
  showMoreBtn={showMoreBtn}/>}/>
  <Route path="/comics" element={ <ComicsList
    randomComics={randomComics}  uploadAdditionalComics={uploadAdditionalComics}
     showMoreComicsBtn={showMoreComicsBtn}
     chooseComics={chooseComics} selectedComics={comicsInfoData.selectedComics}
     />}/>
      <Route path="/comics/:comicsId" element={<ComicsInfo />} />
     <Route path='*' element={<NoMatch />} />
        </Routes>
    </div>
    </Router>
     </Provider>
  );
}
;
