import { useHttp } from "../hooks/useHttp";
import { _transformComics, _transformHero } from "./assistiveFns";

export const useComicsService = () => {
    const {loading, request, error, clearError} = useHttp();
    const _apiBase = "https://marvel-server-zeta.vercel.app/";
    const _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df"
    
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
    const getAllComics = async () => {
        const result = await request(
            `${_apiBase}comics?${_apiKey}`
        )
        return result.data.results.map(_transformComics)
    }
return {loading, error, getAllCharacters, getCharacter, getAllComics, clearError}
}

export default useComicsService;
// https://marvel-server-zeta.vercel.app/comics?apikey=d4eecb0c66dedbfae4eab45d312fc1df
// https://marvel-server-zeta.vercel.app/characters?apikey=d4eecb0c66dedbfae4eab45d312fc1df