import { useEffect, useState } from 'react';
import ComicsService from './services/ComicsService';
import { RandomHero } from './components/RandomHero';
import { getRandomNum, scrollToTop } from './utils/utils';
import { Navbar } from './Bootstrap_components/Navbar';
import { HeroList } from './components/HeroList';
import { initHero } from './constants';

export const App = () => {
  const [pagesVisibility, setPagesVisibility] = useState([{id: 0, isVisible: true},
    {id: 1, isVisible: false}
  ])
  // variables
  const [randomHero, setRandomHero] = useState(initHero);
  const [selectedHero, setSelectedHero] = useState(initHero);
  const [isInfoOpened, setIsInfoOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [randomHeroes, setRandomHeroes] = useState([]);
  const [showMoreBtn, setShowMoreBtn] = useState(true)
  // fns
 
  const changePage = (pageId) => setPagesVisibility([...pagesVisibility]
    .map(item => item.id === pageId ? {...item, isVisible: true} : {...item, isVisible: false}))
  const onError = () => {
    setErr(true);
    setLoading(false)
  }
  const chooseHero = (heroId) => {
    setIsInfoOpened(true);
    setSelectedHero([...randomHeroes].find(item => item.id === heroId));
    scrollToTop()
  }
  const updateHero = () => {
  const comicsService = new ComicsService();
  comicsService.getCharacter(getRandomNum(20))
  .then((data) => {
    setLoading(true)
    setRandomHero(data);
    setLoading(false);
  }).catch(onError) }
  const getRandomHeroes = () => {
  const comicsService = new ComicsService();
  comicsService.getAllCharacters()
  .then((data) => {
    setRandomHeroes([...data].sort(() => Math.random() - 0.5).splice(0,9));
    setLoading(false);
  }).catch(onError) }

 const uploadAdditionalHeroes= () => {
  const comicsService = new ComicsService();
  comicsService.getAllCharacters()
  .then((data) => {
    const additionalHeroes = [...data].filter(item => !randomHeroes.some(rndHero => rndHero.id === item.id))
    .sort(() => Math.random() - 0.5).splice(0, 9);
    setRandomHeroes([...randomHeroes, ...additionalHeroes]);
    if(additionalHeroes.length < 9) setShowMoreBtn(false);
  }).catch(onError) }

    useEffect(() => {updateHero()}, []);
    useEffect(() => {getRandomHeroes()}, []);

  return (
    <div className="App">
     <Navbar changePage={changePage} pageList={pagesVisibility}/>
    {pagesVisibility[0].isVisible ? <RandomHero hero={randomHero} loading={loading} err={err} 
     updateHero={updateHero}/> : null}
  {pagesVisibility[1].isVisible ? 
  <HeroList randomHeroes={randomHeroes} selectedHero={selectedHero} 
  isInfoOpened={isInfoOpened} chooseHero={chooseHero} uploadAdditionalHeroes={uploadAdditionalHeroes}
  showMoreBtn={showMoreBtn}/>
   : null}
    </div>
  );
}
;
