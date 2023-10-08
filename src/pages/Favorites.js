import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../component/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No Favorites yes.Add some!</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>My Favorite Meetups</h1>
      {content}
    </div>
  );
}

export default FavoritesPage;
