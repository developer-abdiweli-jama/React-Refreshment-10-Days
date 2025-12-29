import PropTypes from "prop-types";
import UserUsername from "./UserUsername";
import UserFavoriteFoods from "./UserFavoriteFoods";

export default function UserProfile({ username, age, isLoggedIn, favoriteFoods }) {
    if (!isLoggedIn) {
        return <p>User is Not Logged In</p>
    }
    return (
        <div id="user-profile">
            <UserUsername username={username} /> <br />
            <b>Age:</b>
            <span>{age}</span>
            <UserFavoriteFoods food={favoriteFoods} />
        </div>
    );
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number,
    isLoggedIn: PropTypes.bool.isRequired,
    favoriteFoods: PropTypes.arrayOf(PropTypes.string).isRequired
}