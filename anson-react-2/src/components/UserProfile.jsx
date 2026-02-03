import React from "react";
import PropTypes from "prop-types";
import UserUsername from "./UserUsername";
import UserFavoriteFoods from "./UserFavoriteFoods";

/**
 * UserProfile component displays user information conditionally based on login status.
 * Demonstrates conditional rendering and prop validation.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.username - The user's username.
 * @param {number} props.age - The user's age.
 * @param {boolean} props.isLoggedIn - Whether the user is logged in.
 * @param {string[]} props.favoriteFoods - List of favorite foods.
 */
export default function UserProfile({ username, age, isLoggedIn, favoriteFoods }) {
    // Conditional rendering based on authentication status
    if (!isLoggedIn) {
        return <p>User is Not Logged In</p>
    }

    return (
        <div id="user-profile">
            <UserUsername username={username} />
            <br />
            <b>Age: </b>
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