export const _transformHero = (receivedHero) => {
    const {id, name, thumbnail ,description, urls, comics } = receivedHero;
    const newHero = {
      id, name, description,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      homepage: urls[0].url,
      wiki: urls[1].url,
      comics: comics.items
    }
    return newHero
    }
export const _transformComics = (receivedComics) => {
    const {id, title, thumbnail ,description, pageCount, prices } = receivedComics;
    const newComics = {
      id, name: title, description,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      price: prices[0].price, pageCount
    }
    return newComics
}