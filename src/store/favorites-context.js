import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
});

// Its job is to provide this context to all the components that are interested in listening to the values so all the components that need values from the context and this function will also be responsible for updating the context values
function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    // This Provider component needs to be wrapped around all components that are interested in interacting with the FavoritesContext context
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}