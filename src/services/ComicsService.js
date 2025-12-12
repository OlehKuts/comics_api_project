class ComicsService {
    _apiBase = "https://marvel-server-zeta.vercel.app/";
    _apiKey = "apikey=d4eecb0c66dedbfae4eab45d312fc1df"
    getResource = async (url) => {
        let response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Could not get data from this ${url} adress.
                Status: ${response.status}`)
        }
        return await response.json()
    }
    getAllCharacters = async () => {
        const result = await this.getResource(
            `${this._apiBase}characters?${this._apiKey}`
        )
        return result.data.results.map(this._transformHero)
    }
    getCharacter = async (characterId) => {
        const result = await this.getResource(
            `${this._apiBase}characters/${characterId}?${this._apiKey}`
        )
        return this._transformHero(result.data.results[0])
    }
    _transformHero = (receivedHero) => {
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
}

export default ComicsService;

// https://marvel-server-zeta.vercel.app/characters?apikey=d4eecb0c66dedbfae4eab45d312fc1df