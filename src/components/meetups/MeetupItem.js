import { useContext } from 'react';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    // Gets the prop value={context} from context object located in '../../store/favorites-context'. The key properties of function names point to their respective functions, which can then be called by useContext(FavoritesContext) as well as other state values such as favorites or totalFavorites.
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return (
        <li className={classes.item}>
            <p>Total favorites count: {favoritesCtx.totalFavorites}</p>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;
