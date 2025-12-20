import { createContext } from "react";
import { initComics } from "./constants";

export const comicsContext = createContext({
    selectedComics: initComics,
    chooseComics: () => {}
})