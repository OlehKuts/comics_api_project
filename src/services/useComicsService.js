import { useHttp } from "../hooks/useHttp";

export const useComicsService = () => {
    const {loading, request, error, clearError} = useHttp();
    const _apiBase = "https://marvel-server-zeta.vercel.app/";
    const _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df"
    const _transformHero = (receivedHero) => {
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
    const getAllCharacters = async () => {
        const result = await request(
            `${_apiBase}characters?${_apiKey}`
        )
        return result.data.results.map(_transformHero)
    }
    const getCharacter = async (characterId) => {
        const result = await request(
            `${_apiBase}characters/${characterId}?${_apiKey}`
        )
        return _transformHero(result.data.results[0])
    }
   
return {loading, error, getAllCharacters, getCharacter, clearError}
}

export default useComicsService;

// https://marvel-server-zeta.vercel.app/characters?apikey=d4eecb0c66dedbfae4eab45d312fc1df